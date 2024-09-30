import { ref } from "vue"

import { useApiKey } from "@/stores/api-key"
import { useToastStore } from "@/stores/toast-data"

import type { UserMovieType } from "@/types/types"

const apiKeyStore = useApiKey()
const toastStore = useToastStore()

const showInfo = ref<boolean>(false)
const loadingIsShow = ref<boolean>(false)
const responseItem = ref<number>(0)
const responseRef = ref<any[]>([])
const errorFilmName = ref<string>("")

const userMovie = ref<UserMovieType>({
  userName: `${localStorage.getItem("userName")}`,
  name: "",
  genre: "",
  year: "",
  length: "",
  isSeries: false,
  image: "",
  rating: { imdb: "", kp: "" },
})

// инвертирую showInfo
function changeShowInfo() {
  showInfo.value = !showInfo.value
}

function fixedEncodeURIComponent(str: string) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16)
  })
}

function callToastError() {
  toastStore.toastIsShow = true
  toastStore.toastSuccess = false
  toastStore.filmName = userMovie.value.name
  toastStore.errorMessage = `Movie with this title not found`
  toastStore.callToast()
}

async function autocomplete(filmName: string) {
  if (filmName === "") {
    errorFilmName.value = "the field must be filled"
  } else {
    errorFilmName.value = ""
    loadingIsShow.value = true
    const urlName = fixedEncodeURIComponent(filmName)

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": `${apiKeyStore.apiKey}`,
      },
    }

    try {
      const response = await fetch(
        `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=5&query=${urlName}`,
        options
      )
      const data = await response.json()
      responseRef.value = data.docs
      changeResponseItem()
      console.log(responseRef.value)
    } catch (err) {
      console.error(err)
      callToastError()
    } finally {
      loadingIsShow.value = false
    }
  }
}

function changeResponseItem() {
  const fnRes = responseRef.value[responseItem.value]

  userMovie.value.name = fnRes.name
  userMovie.value.year = `${fnRes.year}`
  userMovie.value.length = fnRes.isSeries
    ? fnRes.seriesLength
    : fnRes.movieLength
  userMovie.value.isSeries = fnRes.isSeries
  userMovie.value.image = fnRes.poster.previewUrl
  userMovie.value.genre = genre(fnRes.genres)
  userMovie.value.rating.imdb = fnRes.rating.imdb.toFixed(1)
  userMovie.value.rating.kp = fnRes.rating.kp.toFixed(1)
  responseItem.value === 4 ? (responseItem.value = 0) : responseItem.value++
}

function genre(arr: { name: string }[]) {
  let text = ""
  arr.forEach((element: { name: string }) => {
    text += `${element.name}, `
  })
  text = text.replace(/,\s*$/, "")
  return text
}

export {
  changeShowInfo,
  autocomplete,
  changeResponseItem,
  showInfo,
  userMovie,
  loadingIsShow,
  errorFilmName,
}

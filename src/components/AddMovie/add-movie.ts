import { ref } from "vue"
import { useApiKey } from "@/stores/api-key"
import type { UserMovieType } from "@/types/types"

const showInfo = ref<boolean>(false)

const userMovie = ref<UserMovieType>({
  userName: `${localStorage.getItem("userName")}`,
  name: "",
  genre: "",
  year: "",
  length: "",
  isSeries: false,
  image: "",
  rating: [{ imdb: "", kp: "" }],
})

const apiKeyStore = useApiKey()

// инвертирую showInfo
function changeShowInfo() {
  showInfo.value = !showInfo.value
}

function fixedEncodeURIComponent(str: string) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16)
  })
}

async function autocomplete(filmName: string) {
  const urlName = fixedEncodeURIComponent(filmName)

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${apiKeyStore.apiKey}`,
    },
  }

  await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=3&query=${urlName}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const res = response.docs[0]
      userMovie.value.name = res.name
      userMovie.value.year = `${res.year}`
      userMovie.value.length = res.isSeries ? res.seriesLength : res.movieLength
      userMovie.value.isSeries = res.isSeries
      userMovie.value.image = res.poster.previewUrl
      userMovie.value.genre = genre(res.genres)
      userMovie.value.rating[0].imdb = res.rating.imdb.toFixed(1)
      userMovie.value.rating[0].kp = res.rating.kp.toFixed(1)
      console.log(response)
    })
    .catch((err) => console.error(err))
}

function genre(arr: { name: string }[]) {
  let text = ""
  arr.forEach((element: { name: string }) => {
    text += `${element.name}, `
  })
  text = text.replace(/,\s*$/, "")
  return text
}

export { changeShowInfo, autocomplete, showInfo, userMovie }

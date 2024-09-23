import { ref } from "vue"
import { useApiKey } from "@/stores/api-key"

const showInfo = ref<boolean>(false)

const userMovie = ref({
  userName: `${localStorage.getItem("userName")}`,
  name: "",
  genre: "",
  year: "",
  length: "",
  isSeries: false,
  image: "",
})

const apiKeyStore = useApiKey()

console.log(apiKeyStore.apiKey)

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
      "X-API-KEY": "0TRXKX0-4QCM482-GQQPR1K-C8Z4MAT",
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
      userMovie.value.year = res.year
      userMovie.value.length = res.isSeries ? res.seriesLength : res.movieLength
      userMovie.value.isSeries = res.isSeries
      userMovie.value.image = res.poster.previewUrl
      userMovie.value.genre = genre(res.genres)
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

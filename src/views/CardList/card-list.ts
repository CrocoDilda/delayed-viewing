import { ref } from "vue"

import { useMoviesStore } from "@/stores/films-list"
import { useTabindex } from "@/stores/tabindex"

const filmName = ref<string>("")
const toastIsShow = ref<boolean>(false)
const listOfAllMenus = ref<Record<string, boolean>>({})

const moviesStore = useMoviesStore()

const tabindex = useTabindex()
const addMovieShow = ref(false)

function reCreateListOfAllMenus() {
  for (let i = 0; i < moviesStore.movies.length; i++) {
    listOfAllMenus.value[i] = false
  }
}
reCreateListOfAllMenus()

function toggleAddMovie() {
  addMovieShow.value = !addMovieShow.value
}

function callToast() {
  toastIsShow.value = false
  setTimeout(() => {
    toastIsShow.value = true
  }, 100)
}

export {
  toggleAddMovie,
  callToast,
  reCreateListOfAllMenus,
  tabindex,
  addMovieShow,
  moviesStore,
  filmName,
  toastIsShow,
  listOfAllMenus,
}

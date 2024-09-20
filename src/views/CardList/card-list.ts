import { ref } from "vue"

import { useMoviesStore } from "@/stores/films-list"
import { useTabindex } from "@/stores/tabindex"

const filmName = ref<string>("")
const toastIsShow = ref<boolean>(false)

const moviesStore = useMoviesStore()

const tabindex = useTabindex()
const addMovieShow = ref(false)

function toggleAddMovie() {
  addMovieShow.value = !addMovieShow.value
}

function callToast() {
  toastIsShow.value = true
}

export {
  toggleAddMovie,
  callToast,
  tabindex,
  addMovieShow,
  moviesStore,
  filmName,
  toastIsShow,
}

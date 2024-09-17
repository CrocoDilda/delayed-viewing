import { ref } from "vue"

import { useMoviesStore } from "@/stores/films-list"
import { useTabindex } from "@/stores/tabindex"

const filmName = ref<string>("")
const toastIsShow = ref<boolean>(false)

const moviesStore = useMoviesStore()

const tabindex = useTabindex()
const addMovieShow = ref(false)

function showToast() {
  toastIsShow.value = !toastIsShow.value
}

function toggleAddMovie() {
  addMovieShow.value = !addMovieShow.value
}

export {
  toggleAddMovie,
  tabindex,
  addMovieShow,
  moviesStore,
  filmName,
  toastIsShow,
}

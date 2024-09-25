import { ref } from "vue"

import { useMoviesStore } from "@/stores/films-list"
import { useTabindex } from "@/stores/tabindex"

const filmName = ref<string>("")
const toastIsShow = ref<boolean>(false)
const menuIsShow = ref<boolean>(false)

const moviesStore = useMoviesStore()

const tabindex = useTabindex()
const addMovieShow = ref(false)

function toggleAddMovie() {
  addMovieShow.value = !addMovieShow.value
}

function callToast() {
  toastIsShow.value = false
  setTimeout(() => {
    toastIsShow.value = true
  }, 100)
}

function handleDocumentClick() {
  menuIsShow.value = false
  console.log("function handleDocumentClick", "menuIsShow: ", menuIsShow.value)
}

export {
  toggleAddMovie,
  callToast,
  handleDocumentClick,
  tabindex,
  addMovieShow,
  moviesStore,
  filmName,
  toastIsShow,
  menuIsShow,
}

import { ref } from "vue"

import { useMoviesStore } from "@/stores/films-list"
import { useTabindex } from "@/stores/tabindex"

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

export {
  toggleAddMovie,
  reCreateListOfAllMenus,
  tabindex,
  addMovieShow,
  moviesStore,
  listOfAllMenus,
}

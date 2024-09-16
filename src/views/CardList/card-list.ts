import { ref } from "vue"

import { useMoviesStore } from "@/stores/films-list"
import { useTabindex } from "@/stores/tabindex"
import { postData, getData } from "@/utils/utils"

const moviesStore = useMoviesStore()

const tabindex = useTabindex()
const addMovieShow = ref(false)

function toggleAddMovie() {
  addMovieShow.value = !addMovieShow.value
}

export { toggleAddMovie, tabindex, addMovieShow, moviesStore }

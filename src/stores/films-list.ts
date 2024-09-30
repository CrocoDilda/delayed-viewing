import { defineStore } from "pinia"
import type { ServerMovieType } from "@/types/types"

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [] as ServerMovieType[],
  }),
})

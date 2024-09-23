import { defineStore } from "pinia"
import type { UserMovieType } from "@/types/types"

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [] as UserMovieType[],
  }),
})

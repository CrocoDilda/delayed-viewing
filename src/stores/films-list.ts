import { defineStore } from "pinia"

type Movie = Record<string, string | boolean>

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [] as Movie[],
  }),
})

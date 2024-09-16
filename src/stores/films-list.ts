import { defineStore } from "pinia"

type Movie = Record<string, string>

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [] as Movie[],
  }),
})

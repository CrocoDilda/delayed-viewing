import { defineStore } from "pinia"
import { getData } from "@/utils/utils"

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [] as { id: string; movies: Record<string, string> }[],
  }),
  actions: {
    async updateMovies() {
      try {
        const newMovies = await getData(
          "movies",
          `id=${localStorage.getItem("userName")}`
        ) // Вызов импортированной функции
        this.movies = newMovies // Обновление состояния
      } catch (error) {
        console.error("Failed to fetch movies:", error)
      }
    },
  },
})

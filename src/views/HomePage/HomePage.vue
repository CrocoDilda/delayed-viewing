<script setup lang="ts">
import { useRouter } from "vue-router"
import { onMounted } from "vue"

import { goToRoutesPage, getData } from "@/utils/utils"

import { useMoviesStore } from "@/stores/films-list"

const moviesStore = useMoviesStore()
const router = useRouter()
const user = localStorage.getItem("userName")

const updateMovies = () => {
  moviesStore.updateMovies()
  console.log(moviesStore.movies)
}

function getFilms() {
  updateMovies()
  const path = `/home/` + (moviesStore.movies ? "main" : "start")
  goToRoutesPage(router, path, true)
}

console.log(moviesStore.movies)

onMounted(() => {
  getFilms()
})
</script>

<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { onMounted } from "vue"

import { goToRoutesPage, updateMovies } from "@/utils/utils"

import { useMoviesStore } from "@/stores/films-list"

const moviesStore = useMoviesStore()
const router = useRouter()

async function getFilms() {
  await updateMovies()
  console.log(moviesStore.movies)
  const path = `/home/` + (!!moviesStore.movies.length ? "main" : "start")
  goToRoutesPage(router, path, true)
}

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

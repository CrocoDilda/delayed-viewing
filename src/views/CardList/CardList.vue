<script setup lang="ts">
import HeaderItem from "@/components/HeaderItem/HeaderItem.vue"
import CardItem from "@/views/CardList/CardItem/CardItem.vue"

import { useMoviesStore } from "@/stores/films-list"
import { ref } from "vue"

const moviesStore = useMoviesStore()

const objMovies = ref(moviesStore.movies[0].movies)

const updateMovies = () => {
  moviesStore.updateMovies()
  objMovies.value = moviesStore.movies[0].movies
  console.log(objMovies.value)
  console.log(moviesStore.movies)
}

updateMovies()
</script>

<template>
  <div class="wrapper">
    <HeaderItem />
    <h2>Card list</h2>
    <CardItem v-for="(movie, id) in objMovies" :key="id" :obj="movie" />
  </div>
</template>

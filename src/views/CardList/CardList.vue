<script setup lang="ts">
import HeaderItemHome from "@/components/HeaderItem/HeaderItemHome.vue"
import CardItem from "@/views/CardList/CardItem/CardItem.vue"

import { useMoviesStore } from "@/stores/films-list"

const moviesStore = useMoviesStore()
</script>

<template>
  <div class="wrapper">
    <HeaderItemHome />

    <ul class="list">
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
      />
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
      />
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
      />
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
      />
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
      />
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
      />
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
      />
    </ul>
  </div>
</template>

<style scoped>
.wraper {
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px 30px;
  justify-items: center;
}
</style>

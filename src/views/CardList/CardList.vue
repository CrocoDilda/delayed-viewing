<script setup lang="ts">
import HeaderItemHome from "@/components/HeaderItem/HeaderItemHome.vue"
import CardItem from "@/views/CardList/CardItem/CardItem.vue"
import AddMovie from "@/components/AddMovie/AddMovie.vue"

import {
  toggleAddMovie,
  tabindex,
  addMovieShow,
  moviesStore,
  filmName,
  toastIsShow,
} from "./card-list"
</script>

<template>
  <div class="wrapper">
    <HeaderItemHome
      :tabindex="tabindex.tabindexVar"
      @toggleAddMovie="toggleAddMovie"
    />
    <AddMovie
      v-model="filmName"
      :toggleAddMovie="toggleAddMovie"
      v-show="addMovieShow"
    />
    <ul class="list">
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
        :tabindex="tabindex.tabindexVar"
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

<script setup lang="ts">
import HeaderItemHome from "@/components/HeaderItem/HeaderItemHome.vue"
import CardItem from "@/views/CardList/CardItem/CardItem.vue"
import AddMovie from "@/components/AddMovie/AddMovie.vue"
import ToastItem from "@/components/ToastItem/ToastItem.vue"

import { watch } from "vue"

import {
  toggleAddMovie,
  callToast,
  tabindex,
  addMovieShow,
  moviesStore,
  filmName,
  toastIsShow,
} from "./card-list"

watch(toastIsShow, () => {
  console.log("toastIsShow", toastIsShow.value)
})
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
      :callToast="callToast"
      v-if="addMovieShow"
    />
    <ToastItem
      v-if="toastIsShow"
      v-model="toastIsShow"
      :success="true"
      :name="filmName"
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
.list {
  padding-top: 75px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px 30px;
  justify-items: center;
}
</style>

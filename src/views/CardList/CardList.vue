<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue"

import HeaderItemHome from "@/components/HeaderItem/HeaderItemHome.vue"
import FooterItem from "@/components/FooterItem/FooterItem.vue"
import CardItem from "@/views/CardList/CardItem/CardItem.vue"
import AddMovie from "@/components/AddMovie/AddMovie.vue"
import ToastItem from "@/components/ToastItem/ToastItem.vue"

import {
  toggleAddMovie,
  callToast,
  handleDocumentClick,
  tabindex,
  addMovieShow,
  moviesStore,
  filmName,
  toastIsShow,
  menuIsShow,
} from "./card-list"

onMounted(() => {
  document.addEventListener("click", handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick)
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
        v-model="menuIsShow"
      />
    </ul>
    <FooterItem :totalMovies="moviesStore.movies.length" />
  </div>
</template>

<style scoped>
.wrapper {
  overflow-x: hidden;
}

.list {
  padding: 80px 10px 0 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px 30px;
  justify-items: center;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

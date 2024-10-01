<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue"

import { useToastStore } from "@/stores/toast-data"

import HeaderItemHome from "@/components/HeaderItem/HeaderItemHome.vue"
import FooterItem from "@/components/FooterItem/FooterItem.vue"
import CardItem from "@/views/CardList/CardItem/CardItem.vue"
import AddMovie from "@/components/AddMovie/AddMovie.vue"
import ToastItem from "@/components/ToastItem/ToastItem.vue"

import {
  toggleAddMovie,
  reCreateListOfAllMenus,
  tabindex,
  addMovieShow,
  moviesStore,
  listOfAllMenus,
} from "./card-list"

const toastStore = useToastStore()

onMounted(() => {
  document.addEventListener("click", reCreateListOfAllMenus)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", reCreateListOfAllMenus)
})
</script>

<template>
  <div class="wrapper">
    <HeaderItemHome
      :tabindex="tabindex.tabindexVar"
      @toggleAddMovie="toggleAddMovie"
    />
    <AddMovie v-if="addMovieShow" :toggleAddMovie="toggleAddMovie" />
    <ToastItem v-if="toastStore.toastIsShow" />
    <ul class="list">
      <CardItem
        v-for="(movie, id) in moviesStore.movies"
        :key="id"
        :obj="movie"
        :tabindex="tabindex.tabindexVar"
        v-model="listOfAllMenus[id]"
      />
    </ul>
    <FooterItem class="footer" :totalMovies="moviesStore.movies.length" />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-rows: 1fr auto;
  overflow-x: hidden;
}

.list {
  padding: 80px 10px 20px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px 30px;
  justify-items: center;
  overflow-x: hidden;
  overflow-y: auto;
}

.footer {
  align-self: end;
}

@media (max-width: 670px) {
  .list {
    gap: 20px;
  }
}
</style>

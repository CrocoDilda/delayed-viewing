<script setup lang="ts">
import { ref } from "vue"

import { useRouter } from "vue-router"

import { useTabindex } from "@/stores/tabindex"

import { goToRoutesPage } from "@/utils/utils"

import ButtonControl from "@/components/controls/ButtonControl.vue"
import HeaderItem from "@/components/HeaderItem/HeaderItem.vue"
import AddMovie from "@/components/AddMovie/AddMovie.vue"

const addMovieShow = ref<boolean>(false)
const tabindex = useTabindex()
const router = useRouter()

function toggleAddMovie() {
  if (addMovieShow.value) {
    goToRoutesPage(router, `/home/main`, true)
  }
  addMovieShow.value = !addMovieShow.value
}
</script>

<template>
  <div class="wrapper">
    <AddMovie
      :updateList="toggleAddMovie"
      v-if="addMovieShow"
      :toggleAddMovie="toggleAddMovie"
    />
    <HeaderItem />
    <div class="inner">
      <h2 class="title">
        В вашей коллекции пока пусто 😞 <br />
        Нажмите, чтобы <span class="title_green">добавить</span> свой первый
        <span class="title_green">фильм</span> или
        <span class="title_green">сериал</span> 🤩
      </h2>
      <ButtonControl
        @click="toggleAddMovie()"
        :tabindex="tabindex.tabindexVar"
        text="Get start"
        class="button"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: center;
  gap: 30px;
  align-self: center;
}

.inner {
  display: grid;
  justify-items: center;
  gap: 30px;
}

.title {
  display: block;
  align-self: end;
  font-size: 1.5rem;
  line-height: 1.7;
  text-align: center;
}

.title_green {
  color: var(--color-main-green);
}

.button {
  align-self: start;
  background-color: var(--color-main-green);
}
</style>

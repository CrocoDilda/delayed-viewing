<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

import { changeShowInfo, showInfo } from "./add-movie"

import { useMoviesStore } from "@/stores/films-list"

import LabelControl from "../controls/LabelControl/LabelControl.vue"
import ButtonControl from "../controls/ButtonControl.vue"
import IconClose from "../icons/IconClose.vue"
import IconInformation from "../icons/IconInformation.vue"

import { changeTabindex, postData } from "@/utils/utils"

type UserMovie = Record<string, string>
type Props = {
  toggleAddMovie: Function
}

const userMovie = ref<UserMovie>({
  userName: `${localStorage.getItem("userName")}`,
  name: "",
  genre: "",
  year: "",
  length: "",
  image: "",
})

const props = defineProps<Props>()

const model = defineModel<string>()

function updateList(obj: Record<string, string>) {
  postData(`movies?userName=${localStorage.getItem("userName")}`, obj)
  const moviesStore = useMoviesStore()
  moviesStore.movies.push(obj)
  model.value = useMoviesStore.name
  userMovie.value = {
    userName: `${localStorage.getItem("userName")}`,
    name: "",
    genre: "",
    year: "",
    length: "",
    image: "",
  }
  props.toggleAddMovie()
}

onMounted(() => {
  changeTabindex(-1)
})

onUnmounted(() => {
  changeTabindex(0)
})
</script>

<template>
  <div class="wrapperr">
    <div class="background"></div>
    <div class="inner">
      <div v-if="showInfo" class="explanation">
        <div @click="changeShowInfo" class="explanation--background"></div>
        <p class="explanation--description">
          При нажатии на кнопку <b>Autocomplete</b> вы запросите данные по
          названию, указанному в поле <b>"Name"</b>, с удалённой базы данных
          фильмов. Остальные поля будут автоматически заполнены
          <span class="explanation--smile">😲</span> . Проверьте корректность
          введённого названия и полученных данный. Возможно сервис вернул не то,
          что вы имели ввиду. Так же вы можете вручную заполнить все поля
          <span class="explanation--smile">🥲</span>. Никакие поля, кроме
          <b>"Name"</b>, не являются обязательными к заполнению
          <span class="explanation--smile">🫣</span>.
        </p>
      </div>
      <div class="form">
        <button @click="toggleAddMovie()" class="close">
          <IconClose />
        </button>
        <LabelControl
          placeholder="Мстители: Финал"
          description="Film name*"
          inputType="text"
          v-model="userMovie.name"
        />
        <div class="autocomplete">
          <ButtonControl text="Autocomplete" class="autocomplete--button" />
          <button @click="changeShowInfo" class="autocomplete--info">
            <IconInformation class="info" />
          </button>
        </div>
        <LabelControl
          description="Film genre"
          placeholder="фантастика, боевик, драма"
          inputType="text"
          v-model="userMovie.genre"
        />
        <LabelControl
          description="Released"
          placeholder="2019"
          inputType="text"
          v-model="userMovie.year"
        />
        <LabelControl
          description="Duration"
          placeholder="3 ч 1 мин"
          inputType="text"
          v-model="userMovie.length"
        />
        <LabelControl
          description="Movie poster"
          placeholder="https://kinopoisk-ru/avengers"
          inputType="text"
          v-model="userMovie.image"
        />
        <ButtonControl
          @click="updateList(userMovie)"
          text="Add movie"
          class="button"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("./add-movie.css");
</style>

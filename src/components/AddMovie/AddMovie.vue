<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"

import {
  changeShowInfo,
  autocomplete,
  changeResponseItem,
  showInfo,
  userMovie,
  loadingIsShow,
  errorFilmName,
} from "./add-movie"

import type { UserMovieType } from "@/types/types"

import LabelControl from "../controls/LabelControl/LabelControl.vue"
import ButtonControl from "../controls/ButtonControl.vue"
import IconClose from "../icons/IconClose.vue"
import IconInformation from "../icons/IconInformation.vue"
import IconReboot from "../icons/IconReboot.vue"
import LoadingItem from "../LoadingItem.vue"

import { changeTabindex, postData, updateMovies } from "@/utils/utils"

type Props = {
  toggleAddMovie: Function
  nextPage?: Function
}

const props = defineProps<Props>()

async function updateList(obj: UserMovieType) {
  await postData(`movies?userName=${localStorage.getItem("userName")}`, obj)
  updateMovies()
  //   Эта функция нужна для перехода на CardList из GetStart при нажатии на кнопку "Add movie"
  if (props.nextPage) {
    props.nextPage()
  }
  props.toggleAddMovie()
}

onMounted(() => {
  changeTabindex(-1)
})

onUnmounted(() => {
  changeTabindex(0)
  userMovie.value = {
    userName: `${localStorage.getItem("userName")}`,
    name: "",
    genre: "",
    year: "",
    length: "",
    isSeries: false,
    image: "",
    rating: { imdb: "", kp: "" },
  }
})
</script>

<template>
  <div class="wrapperr">
    <LoadingItem v-if="loadingIsShow" />
    <div @click="toggleAddMovie()" class="background"></div>
    <div class="inner">
      <div v-if="showInfo" class="explanation">
        <div @click="changeShowInfo" class="explanation--background"></div>
        <p class="explanation--description">
          При нажатии на кнопку <b>Autocomplete</b> вы запросите данные по
          названию, указанному в поле <b>"Name"</b>, с удалённой базы данных
          фильмов. Остальные поля будут автоматически заполнены, в том числе и
          поля карточки фильма. <span class="explanation--smile">😲</span> .
          Проверьте корректность введённого названия и полученных данный.
          Возможно сервис вернул не то, что вы имели ввиду. Вы можете нажать на
          кнопку <IconReboot class="info info--small" />, тем самым поменяв
          вариант выдачи. Так же вы можете вручную заполнить все поля
          <span class="explanation--smile">🥲</span>. Никакие поля, кроме
          <b>"Name"</b>, не являются обязательными к заполнению
          <span class="explanation--smile">🫣</span>. <br />
          <!-- Если вставленный при автозаполнении постер не загружается, то это
          ошибка на сервере кинопоиска. Вы можете найти ссылку на другое
          изображение и использовать его. -->
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
          :error="errorFilmName"
        />
        <div class="autocomplete">
          <button @click="changeResponseItem" class="autocomplete--info">
            <IconReboot class="info" />
          </button>
          <ButtonControl
            @click="autocomplete(userMovie.name)"
            text="Autocomplete"
            class="autocomplete--button"
          />
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

        <LabelControl
          description="Is series"
          placeholder=""
          inputType="checkbox"
          v-model="userMovie.isSeries"
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

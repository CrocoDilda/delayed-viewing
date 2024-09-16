<script setup lang="ts">
import "./add-movie"
import { useShowInfo } from "./add-movie"

import LabelControl from "../controls/LabelControl/LabelControl.vue"
import ButtonControl from "../controls/ButtonControl.vue"
import IconClose from "../icons/IconClose.vue"
import IconInformation from "../icons/IconInformation.vue"

const { showInfo, changeShowInfo } = useShowInfo()
const emit = defineEmits(["toggleAddMovie"])
</script>

<template>
  <div class="wrapper">
    <div class="background"></div>
    <div class="innerrr">
      <div v-if="showInfo" class="explanation">
        <div @click="changeShowInfo" class="explanation--background"></div>
        <p class="explanation--description">
          При нажатии на кнопку <b>Autocomplete</b> вы запросите данные по
          названию, указанному в поле <b>"Name"</b>, с удалённой базы данных
          фильмов. Остальные поля будут автоматически заполнены
          <span class="expalnation--smile">😲</span> . Проверьте корректность
          введённого названия и полученных данный. Возможно сервис вернул не то,
          что вы имели ввиду. Так же вы можете вручную заполнить все поля
          <span class="expalnation--smile">🥲</span>. Никакие поля, кроме
          <b>"Name"</b>, не являются обязательными к заполнению
          <span class="expalnation--smile">🫣</span>.
        </p>
      </div>
      <div class="form">
        <button @click="emit('toggleAddMovie')" class="close">
          <IconClose />
        </button>
        <LabelControl
          placeholder="Wonderful film"
          description="Film name"
          inputType="text"
        />
        <div class="autocomplete">
          <ButtonControl text="Autocomplete" class="autocomplete--button" />
          <button @click="changeShowInfo" class="autocomplete--info">
            <IconInformation class="info" />
          </button>
        </div>
        <LabelControl
          description="Film genre"
          placeholder="Drama, action"
          inputType="text"
        />
        <LabelControl
          description="Released"
          placeholder="2022"
          inputType="text"
        />
        <LabelControl
          description="Duration"
          placeholder="120 min"
          inputType="text"
        />
        <LabelControl
          description="Movie poster"
          placeholder="https://kinopoisk-ru/film"
          inputType="text"
        />
        <ButtonControl text="Add movie" class="button" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("./add-movie.css");
</style>

<script setup lang="ts">
import { ref } from "vue"

import IconIMDB from "@/components/icons/IconIMDB.vue"
import IconKinopoisk from "@/components/icons/IconKinopoisk.vue"

import { minToHour, onImageError } from "./card-item"
import { deleteMovie, updateMovies } from "@/utils/utils"

const boardStyles = ref("")
const boardTabindex = ref(-1)

import type { ServerMovieType } from "@/types/types"

type Props = {
  obj: ServerMovieType
  tabindex: number
}

const props = defineProps<Props>()

const model = defineModel<boolean>()

const show = "card--menu-board_show"

function changeBoardStyle() {
  if (model.value === false || boardStyles.value === "") {
    setTimeout(() => {
      model.value = true
      boardStyles.value = show
      boardTabindex.value = 0
    }, 10)
  } else if (model.value === true) {
    boardStyles.value = ""
    boardTabindex.value = -1
  }
}

async function clickDelete() {
  await deleteMovie("movies", props.obj.id, props.obj.name)
  await updateMovies()
}
</script>
<template>
  <li>
    <div :tabindex="tabindex" class="card">
      <div class="card--top">
        <div
          v-if="obj.rating.imdb !== '' || obj.rating.kp !== ''"
          class="card--rating"
        >
          <p class="card--top-grades">
            <IconIMDB class="card--top-icon" />
            {{ obj.rating.imdb === "0.0" ? "--" : obj.rating.imdb }}
          </p>
          <p class="card--top-grades">
            <IconKinopoisk class="card--top-icon" />{{
              obj.rating.kp === "0.0" ? "--" : obj.rating.kp
            }}
          </p>
        </div>
        <div class="card--menu">
          <button
            @click="changeBoardStyle"
            :tabindex="tabindex"
            class="card--menu-button"
          >
            <div class="card--point"></div>
            <div class="card--point"></div>
            <div class="card--point"></div>
          </button>
          <ul v-show="model" :class="`card--menu-board ${boardStyles}`">
            <!-- <li class="card--menu-item">
              <button
                @click="console.log('click to button')"
                :tabindex="boardTabindex"
                class="card--menu-ivent"
              >
                Edit
              </button>
            </li> -->
            <li class="card--menu-item">
              <button
                @click="clickDelete"
                :tabindex="boardTabindex"
                class="card--menu-ivent red"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <img
        class="card--image"
        :src="obj.image"
        alt="movies"
        @error="onImageError"
      />
      <div class="card--description">
        <h3 class="card--title">{{ obj.name }}</h3>
        <p class="card--genre">{{ obj.genre }}</p>
        <p class="card--year">Year: {{ obj.year }}</p>
        <p class="card--length">
          {{
            obj.isSeries
              ? `Series length: ${obj.length} min`
              : `Movie length: ${minToHour(obj.length)}`
          }}
        </p>
        <p class="card--year">{{ obj.isSeries ? "Series" : "Movie" }}</p>
      </div>
    </div>
  </li>
</template>

<style scoped>
@import "./card-item.css";
</style>

<script setup lang="ts">
import fallbackImage from "../../../components/icons/clapper-board.svg"
import IconIMDB from "@/components/icons/IconIMDB.vue"
import IconKinopoisk from "@/components/icons/IconKinopoisk.vue"

import type { UserMovieType } from "@/types/types"

type Props = {
  obj: UserMovieType
  tabindex: number
}

defineProps<Props>()

// Обработчик ошибки загрузки изображения
const onImageError = (e: Event) => {
  if (e.target) {
    const target = e.target as HTMLImageElement
    target.src = fallbackImage
  }
}

function minToHour(minets: string) {
  const min = Number(minets)
  return `${Math.round(min / 60)}h ${min % 60} min`
}
</script>
<template>
  <li>
    <div :tabindex="tabindex" class="card">
      <div class="card--rating">
        <p class="card--rating-grades">
          <IconIMDB class="card--rating-icon" />{{ obj.rating[0].imdb }}
        </p>
        <p class="card--rating-grades">
          <IconKinopoisk class="card--rating-icon" />{{ obj.rating[0].kp }}
        </p>
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

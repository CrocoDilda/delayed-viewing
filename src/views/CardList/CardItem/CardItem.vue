<script setup lang="ts">
type Props = {
  obj: Record<string, string | boolean>
  tabindex: number
}

defineProps<Props>()

// Импорт fallback-изображения
import fallbackImage from "../../../components/icons/clapper-board.svg"
</script>

<template>
  <li>
    <div :tabindex="tabindex" class="card">
      <img
        class="card--image"
        :src="obj.image"
        alt="movies"
        @error="(e) => (e.target.src = fallbackImage)"
      />
      <div class="card--description">
        <h3 class="card--title">{{ obj.name }}</h3>
        <p class="card--genre">{{ obj.genre }}</p>
        <p class="card--year">Year: {{ obj.year }}</p>
        <p class="card--length">
          {{
            obj.isSeries
              ? `Series length: ${obj.length} min`
              : `Movie length: ${obj.length}`
          }}
        </p>
        <p class="card--year">{{ obj.isSeries ? "Series" : "Movie" }}</p>
      </div>
    </div>
  </li>
</template>

<style scoped>
.card {
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  padding: 10px;
  border-radius: 20px;
  width: 300px;
  transition: background-color 0.2s;
  background-color: var(--color-main-gray);
  color: var(--color-main-white);
  height: 100%;
  border: solid 3px var(--color-gray100);
  &:hover {
    background-color: var(--color-gray);
  }
  &:hover {
    background-color: var(--color-gray);
  }
}

.card--image {
  height: 400px;
  border-radius: 10px;
  justify-self: center;
  width: 100%;
  object-fit: cover;
}

.card--title {
  font-size: 18px;
  color: var(--color-main-green);
  font-weight: 700;
}

.card--description {
  display: grid;
  gap: 15px;
  padding-top: 15px;
  font-size: 1rem;
  height: 100%;
}
</style>

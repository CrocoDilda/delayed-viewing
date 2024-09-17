<script setup lang="ts">
type Props = {
  obj: Record<string, string>
  tabindex: number
}

defineProps<Props>()
</script>

<template>
  <li>
    <button :tabindex="tabindex" class="card">
      <img class="card--image" :src="obj.image" alt="movies" />
      <div class="card--description">
        <p class="card--title">
          {{ obj.name }}
        </p>
        <p class="card--genre">{{ obj.genre }}</p>
        <div class="card--inner">
          <p class="card--year">{{ obj.year }}</p>
          <p class="card--length">{{ obj.length }}</p>
        </div>
        <p class="card--year">{{ obj.type }}</p>
      </div>
    </button>
  </li>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  padding: 10px;
  border-radius: 12px;
  max-width: 287px;
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
  border-radius: 6px;
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
}

.card--inner {
  display: flex;
  justify-content: space-between;
}

.card--genre {
}
</style>

<script setup lang="ts">
import { inject } from "vue"

import ButtonControl from "../controls/ButtonControl.vue"

type Props = {
  tabindex: number
}

defineProps<Props>()

const appName = inject("appName")
const emit = defineEmits(["toggleAddMovie"])
</script>

<template>
  <header class="header">
    <h2 class="header--text">{{ appName }}</h2>
    <ButtonControl
      :tabindex="tabindex"
      @click="emit('toggleAddMovie')"
      text="Add movie +"
      class="button"
    />
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 15px;
  background-color: var(--color-main-black);
}

.header--text {
  font-size: 28px;
  color: var(--color-gray);
}

.button {
  background-color: var(--color-main-green);
}
</style>

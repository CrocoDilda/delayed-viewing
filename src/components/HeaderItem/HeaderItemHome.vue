<script setup lang="ts">
import { inject, onMounted } from "vue"

import ButtonControl from "../controls/ButtonControl.vue"

type Props = {
  tabindex: number
}

defineProps<Props>()

const appName = inject<string>("appName")
const emit = defineEmits(["toggleAddMovie"])

function changeTextBasedOnWidth() {
  const textElement = document.getElementById("text")
  const width = window.innerWidth

  if (textElement && appName) {
    if (width < 440) {
      textElement.textContent = "DV"
    } else {
      textElement.textContent = appName
    }
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener("load", changeTextBasedOnWidth)
window.addEventListener("resize", changeTextBasedOnWidth)
onMounted(() => {
  changeTextBasedOnWidth()
})
</script>

<template>
  <header class="header">
    <h2 id="text" class="header--text">{{ appName }}</h2>
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
  position: fixed;
  top: 0;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  background-color: transparent;
  padding: 15px;
  background-color: var(--color-main-black);
  width: 100vw;
  z-index: 10;
}

.header--text {
  font-size: 1.75rem;
  color: var(--color-gray);
}

.button {
  background-color: var(--color-main-green);
}

@media (max-width: 440px) {
  .header--text {
    display: block;
  }

  .button {
    padding: 5px 10px;
  }
}
</style>

<script setup lang="ts">
import IconClose from "../icons/IconClose.vue"
import { ref } from "vue"

// Пример вызова компонента
//<ToastItem
//     v-if="toastIsShow"
//     v-model:toastIsShow="toastIsShow"
//     :success="true"
//     name="Konosuba"
//   />

type Props = {
  name: string
  success: boolean
}

const className = ref<string>("visible")

function closeToast() {
  className.value = "hidden"
  setTimeout(() => {
    model.value = true
  }, 1000)
}

const model = defineModel<boolean>("toastIsShow")

defineProps<Props>()

setTimeout(() => {
  closeToast()
}, 4000)
</script>

<template>
  <div
    :style="{
      border: `3px solid var(${
        success ? `--color-main-green` : `--color-red`
      })`,
    }"
    :class="`toast ${className}`"
  >
    <button @click="closeToast" class="button">
      <IconClose
        :style="{
          fill: `var(${success ? `--color-main-green` : `--color-red`})`,
        }"
      />
    </button>
    <div v-if="success" class="success">
      <h3 class="title success--text">Success!</h3>
      <p class="text">
        <span class="success--text">{{ name }}</span> added to list!
      </p>
    </div>
    <div v-else class="error">
      <h3 class="title error--text">Error</h3>
      <p class="text">
        <span class="error--text">{{ name }}</span> not added to the list
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("./toast-item.css");
</style>

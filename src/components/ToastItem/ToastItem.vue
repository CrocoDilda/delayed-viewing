<script setup lang="ts">
import { ref } from "vue"

import { useToastStore } from "@/stores/toast-data"

import IconClose from "../icons/IconClose.vue"

const toastStore = useToastStore()

const className = ref<string>("visible")

function closeToast() {
  className.value = "hidden"
  setTimeout(() => {
    toastStore.filmName = ""
    toastStore.toastSuccess = true
    toastStore.toastIsShow = false
    toastStore.errorMessage = ""
    toastStore.message = ""
  }, 1000)
}

setTimeout(() => {
  closeToast()
}, 4000)
</script>

<template>
  <div
    :style="{
      border: `3px solid var(${
        toastStore.toastSuccess ? `--color-main-green` : `--color-red`
      })`,
    }"
    :class="`toast ${className}`"
  >
    <button @click="closeToast" class="button">
      <IconClose
        :style="{
          fill: `var(${
            toastStore.toastSuccess ? `--color-main-green` : `--color-red`
          })`,
        }"
      />
    </button>
    <div v-if="toastStore.toastSuccess" class="success">
      <h3 class="title success--text">Success!</h3>
      <p class="text">
        <span class="success--text">{{ toastStore.filmName }}</span>
        {{ toastStore.message }}
      </p>
    </div>
    <div v-else class="error">
      <h3 class="title error--text">Error</h3>
      <p class="text">
        <span class="error--text">{{ toastStore.filmName }}</span>
        {{
          toastStore.errorMessage === ""
            ? `not
        added to the list`
            : toastStore.errorMessage
        }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("./toast-item.css");
</style>

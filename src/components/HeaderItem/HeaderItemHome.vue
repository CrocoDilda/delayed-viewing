<script setup lang="ts">
import { inject } from "vue"

import ButtonControl from "../controls/ButtonControl.vue"

const appName = inject("appName")
</script>

<template>
  <header class="header">
    <h2 class="header--text">{{ appName }}</h2>
    <ButtonControl text="Add movie +" class="button" />
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
  font-size: 1.5rem;
  color: var(--color-gray);
}

.button {
  background-color: var(--color-main-green);
}
</style>

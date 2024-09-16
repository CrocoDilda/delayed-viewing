<script setup lang="ts">
import { inject } from "vue"

const appName = inject("appName")
</script>

<template>
  <header class="header">
    <h2 class="header--text">{{ appName }}</h2>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: start;
  background-color: transparent;
  padding: 15px 0 10px 15px;
  width: 100vw;
  text-align: start;
}

.header--text {
  font-size: 28px;
  color: var(--color-gray);
}
</style>

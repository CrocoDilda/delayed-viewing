<script setup lang="ts">
type Props = {
  text: string
}

defineProps<Props>()
</script>

<template>
  <button class="button">{{ text }}</button>
</template>

<style scoped>
.button {
  padding: 10px 20px;
  border-radius: 15px;
  transition: transform 0.2s, background-color 0.2s, color 0.2s;
  font-size: 1.125rem;
  &:hover {
    transform: scale(1.05);
    background-color: var(--color-main-white);
  }
}
</style>

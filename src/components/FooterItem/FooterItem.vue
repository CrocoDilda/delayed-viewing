<script setup lang="ts">
type Props = {
  totalMovies: number
}

defineProps<Props>()
</script>

<template>
  <footer class="footer">
    <p class="footer--text">© 2024 - {{ new Date().getFullYear() }}</p>
    <p class="footer--text">Total movies: {{ totalMovies }}</p>
    <p class="footer--text">
      Develooped by <a href="https://github.com/CrocoDilda">CrocoDilda</a>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 20px;
  background-color: var(--color-main-black);
  width: 100vw;
  color: var(--color-main-white);
  font-size: 18px;
  border-top: 2px solid var(--color-gray);
  margin-top: 20px;
}
</style>

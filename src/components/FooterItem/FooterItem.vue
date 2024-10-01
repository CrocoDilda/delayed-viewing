<script setup lang="ts">
type Props = {
  totalMovies: number
}

defineProps<Props>()
</script>

<template>
  <footer class="footer">
    <p class="footer--text year">© 2024 - {{ new Date().getFullYear() }}</p>
    <p class="footer--text">Total movies: {{ totalMovies }}</p>
    <p class="footer--text">
      Develooped by <a href="https://github.com/CrocoDilda">CrocoDilda</a>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 35px 20px;
  background-color: var(--color-main-black);
  width: 100vw;
  color: var(--color-main-white);
  font-size: 1.125rem;
  border-top: 2px solid var(--color-gray);
}
@media (max-width: 600px) {
  .footer {
    grid-auto-flow: row;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    margin-top: 0px;
    font-size: 0.875rem;
  }

  .footer--text {
    justify-self: center;
  }

  .year {
    display: none;
  }
}
</style>

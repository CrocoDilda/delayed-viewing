<template>
  <div class="loading-spinner-container">
    <div class="loading-spinner"></div>
  </div>
</template>

<style scoped>
.loading-spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray); /* Полупрозрачный фон */
  z-index: 9999; /* Убедитесь, что он находится поверх других элементов */
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 7px solid var(--color-gray100);
  border-top: 7px solid #00bd7e; /* Цвет анимации */
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

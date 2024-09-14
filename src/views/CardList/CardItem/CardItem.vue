<script setup lang="ts">
type Props = {
  obj: Record<string, string>
}

const props = defineProps<Props>()

console.log(props.obj)
</script>
<template>
  <div class="wrapper">
    <div class="card">
      <img :src="obj.image" alt="" class="card--image" />
      <h3 class="card--title">{{ obj.name }}</h3>
      <ul class="card--description">
        <li class="card--item">{{ obj.year }}</li>
        <li class="card--item">{{ obj.genre }}</li>
        <li class="card--item">{{ obj.length }}</li>
        <li class="card--item">{{ obj.type }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;
}
.card {
  border: 1px solid red;
}
</style>

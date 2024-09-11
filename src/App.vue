<script setup lang="ts">
import { useRouter } from "vue-router"
import { onMounted, provide } from "vue"

provide("appName", "Delayed Viewing")

const router = useRouter()

function goToWelcome() {
  router.push("/")
}

onMounted(() => {
  goToWelcome()
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>

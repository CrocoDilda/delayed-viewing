<script setup lang="ts">
import { useRouter } from "vue-router"
import { onMounted, provide, ref } from "vue"

import { goToRoutesPage } from "@/utils/utils"

provide("appName", "Delayed Viewing")

const router = useRouter()

const user = ref(localStorage.getItem("userName"))

onMounted(() => {
  const path: string = user.value ? "home" : "welcome"
  goToRoutesPage(router, `/${path}`, true)
  console.log(user.value)
})
</script>

<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
}
</style>

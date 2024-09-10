<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function goToLogin() {
  router.push("/login")
}
</script>

<template>
  <h2>sing up</h2>
  <button @click="goToLogin">To login</button>
</template>

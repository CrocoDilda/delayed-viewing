<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

const goToSignUp = () => {
  router.push("/signup")
}
</script>

<template>
  <h2>login</h2>
  <button @click="goToSignUp">To sing up</button>
</template>

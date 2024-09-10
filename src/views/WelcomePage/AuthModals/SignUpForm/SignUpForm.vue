<script setup lang="ts">
import { useRouter } from "vue-router"

import { goToAuthModals } from "../auth-modals"

const router = useRouter()
</script>

<template>
  <h2>This is sign up</h2>
  <button @click="goToAuthModals(router, '/login')">To login</button>
</template>

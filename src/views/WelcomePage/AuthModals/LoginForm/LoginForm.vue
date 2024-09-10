<script setup lang="ts">
import { useRouter } from "vue-router"

import { goToAuthModals } from "../auth-modals"

const router = useRouter()
</script>

<template>
  <h2>This is login</h2>
  <button @click="goToAuthModals(router, '/signup')">To sign up</button>
</template>

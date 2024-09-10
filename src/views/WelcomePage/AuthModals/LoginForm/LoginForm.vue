<script setup lang="ts">
import { useRouter } from "vue-router"

import { goToAuthModals } from "../auth-modals"
import LabelControl from "../../../../components/controls/LabelControl/LabelControl.vue"

const router = useRouter()
</script>

<template>
  <h2>This is login</h2>
  <button @click="goToAuthModals(router, '/signup')">To sign up</button>

  <div class="wrapper">
    <LabelControl description="Email" inputType="email" />
    <LabelControl description="Password" inputType="password" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin-top: 200px;
}
</style>

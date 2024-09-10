<script setup lang="ts">
import { inject } from "vue"
import { useRouter } from "vue-router"

import { goToAuthModals } from "./AuthModals/auth-modals"

import IconClapperboard from "../../components/icons/IconClapperboard.vue"
import ButtonControl from "../../components/controls/ButtonControl.vue"

const router = useRouter()
const appName = inject("appName")
</script>

<template>
  <div class="wrapper">
    <section class="title">
      <IconClapperboard class="title--icon" />
      <h1 class="title--text">
        Welcome to <br />
        <span class="title--name">{{ appName }}</span>
      </h1>
    </section>
    <section class="description">
      <p>
        Добавляйте фильмы или сериалы, что так хотели посмотреть, но всё время
        забывали и избавьтесь от трудного выбора в нужный момент.
      </p>
    </section>
    <section class="start">
      <ButtonControl
        @click="goToAuthModals(router, '/login')"
        text="Login"
        class="button sing-in--button"
      />
      <ButtonControl
        @click="goToAuthModals(router, '/signup')"
        text="Create account"
        class="button"
      />
    </section>
  </div>
</template>

<style scoped>
/* Импортируйте стили здесь */
@import "./welcome-page.css";
</style>

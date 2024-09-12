<script setup lang="ts">
import { inject } from "vue"
import { useRouter } from "vue-router"

import { goToRoutesPage } from "@/utils/utils"

import IconClapperboard from "../../components/icons/IconClapperboard.vue"
import ButtonControl from "../../components/controls/ButtonControl.vue"
import HeaderItem from "@/components/HeaderItem/HeaderItem.vue"

const router = useRouter()
const appName = inject("appName")
</script>

<template>
  <div class="wrapper">
    <HeaderItem />
    <main class="main">
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
          @click="goToRoutesPage(router, '/login')"
          text="Login"
          class="button"
        />
        <ButtonControl
          @click="goToRoutesPage(router, '/signup')"
          text="Create account"
          class="button"
        />
      </section>
    </main>
  </div>
</template>

<style scoped>
@import "./welcome-page.css";
</style>

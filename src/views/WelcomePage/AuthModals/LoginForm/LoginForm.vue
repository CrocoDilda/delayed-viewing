<script setup lang="ts">
import { useRouter } from "vue-router"

import { goToAuthModals } from "../auth-modals"
import LabelControl from "@/components/controls/LabelControl/LabelControl.vue"
import ButtonControl from "@/components/controls/ButtonControl.vue"
import HeaderItem from "@/components/HeaderItem/HeaderItem.vue"

const router = useRouter()
</script>

<template>
  <div class="wrapper">
    <HeaderItem />
    <main class="main">
      <section class="form">
        <h3 class="form--title">Authrization</h3>
        <LabelControl
          description="Unique name"
          inputType="text"
          placeholder="My-wonderful_name"
        />
        <LabelControl
          description="Create password"
          inputType="password"
          placeholder="********"
        />
        <div class="form--buttons-inner">
          <ButtonControl text="Login" class="form--button" />
          <ButtonControl
            @click="goToAuthModals(router, '/signup')"
            text="Create account"
            class="form--button button-router"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
@import url("../auth-modals.css");
</style>

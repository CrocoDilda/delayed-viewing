<script setup lang="ts">
import { useRouter } from "vue-router"

import { goToRoutesPage } from "@/utils/utils"

import {
  passingRouterVariable,
  validateForm,
  errorsValidate,
  changeForm,
  loading,
} from "../auth-modals"

import LabelControl from "@/components/controls/LabelControl/LabelControl.vue"
import ButtonControl from "@/components/controls/ButtonControl.vue"
import HeaderItem from "@/components/HeaderItem/HeaderItem.vue"
import LoadingItem from "@/components/LoadingItem.vue"

const router = useRouter()

passingRouterVariable(router)

const userFormValues = {
  email: "",
  pass: "",
}
</script>

<template>
  <div class="wrapper">
    <HeaderItem />
    <LoadingItem v-if="loading" />
    <main class="main">
      <section class="form">
        <h3 class="form--title">Authorization</h3>
        <LabelControl
          description="Your email"
          inputType="email"
          placeholder="user@email.com"
          :error="errorsValidate.email"
          v-model="userFormValues.email"
        />
        <LabelControl
          description="Create password"
          inputType="password"
          placeholder="********"
          :error="errorsValidate.pass"
          v-model="userFormValues.pass"
        />
        <div class="form--buttons-inner">
          <ButtonControl
            @click="validateForm(userFormValues, 'login')"
            text="Login"
            class="form--button"
          />
          <ButtonControl
            @click="changeForm('/signup')"
            text="Create account"
            class="form--button button-router"
          />
        </div>
        <p class="form--error">
          {{ errorsValidate.form }}
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
@import url("../auth-modals.css");
</style>

<script setup lang="ts">
import { useRouter } from "vue-router"

import { goToRoutesPage } from "@/utils/utils"

import {
  passingRouterVariable,
  validateForm,
  errorsValidate,
} from "../auth-modals"

import LabelControl from "@/components/controls/LabelControl/LabelControl.vue"
import ButtonControl from "@/components/controls/ButtonControl.vue"
import HeaderItem from "@/components/HeaderItem/HeaderItem.vue"

const router = useRouter()

passingRouterVariable(router)

const userFormValues = {
  name: "",
  pass: "",
  repeatPass: "",
}
</script>

<template>
  <div class="wrapper">
    <HeaderItem />
    <main class="main">
      <section class="form">
        <h3 class="form--title">Registration</h3>
        <LabelControl
          description="Unique name"
          inputType="text"
          placeholder="My-wonderful_name"
          :error="errorsValidate.name"
          v-model="userFormValues.name"
        />
        <LabelControl
          description="Create password"
          inputType="password"
          placeholder="********"
          :error="errorsValidate.pass"
          v-model="userFormValues.pass"
        />
        <LabelControl
          description="Repeat password"
          inputType="password"
          placeholder="********"
          :error="errorsValidate.repeatPass"
          v-model="userFormValues.repeatPass"
        />
        <div class="form--buttons-inner">
          <ButtonControl
            @click="validateForm(userFormValues)"
            text="Create account"
            class="form--button"
          />
          <ButtonControl
            @click="goToRoutesPage(router, '/login')"
            text="Login"
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

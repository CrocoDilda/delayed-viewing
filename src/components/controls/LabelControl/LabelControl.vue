<script setup lang="ts">
import PassHidden from "../../icons/PassHidden.vue"
import PassShow from "../../icons/PassShow.vue"

import { ref } from "vue"

type Props = {
  description: string
  inputType: string
  placeholder?: string
  error?: string | null
}

const props = defineProps<Props>()
const inputTypeRef = ref(props.inputType)

function toggleInputType() {
  inputTypeRef.value = inputTypeRef.value === "password" ? "text" : "password"
}
</script>

<template>
  <label class="label">
    <div class="label--inner">
      <p class="labe--description">{{ description }}</p>
      <button
        v-if="inputType === 'password'"
        class="label--show-hide"
        @click="toggleInputType"
      >
        <PassShow v-show="inputTypeRef === 'password'" />
        <PassHidden v-show="inputTypeRef === 'text'" />
      </button>
    </div>
    <input :type="inputType" class="label--input" />
    <p class="label--invalid">Введите коректные данные {{ error }}</p>
  </label>
</template>

<style scoped>
@import url("./label-control.css");
</style>

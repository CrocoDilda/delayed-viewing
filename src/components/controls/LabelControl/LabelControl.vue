<script setup lang="ts">
import PassHidden from "../../icons/PassHidden.vue"
import PassShow from "../../icons/PassShow.vue"
import IconCheckMark from "@/components/icons/IconCheckMark.vue"

import { ref } from "vue"

type Props = {
  description: string
  inputType: string
  placeholder?: string
  error?: string | null
}

const model = defineModel<string | boolean | number>()

const props = defineProps<Props>()
const inputTypeRef = ref(props.inputType)
const inputValue = ref("")

function toggleInputType() {
  inputTypeRef.value = inputTypeRef.value === "password" ? "text" : "password"
}
</script>

<template>
  <label v-if="inputType === 'checkbox'" class="checkbox--label">
    <p class="checkbox--description">{{ description }}</p>
    <button
      :class="'checkbox--button' + (model ? ' checkbox--button_active' : ' ')"
      @click="model = !model"
    >
      <IconCheckMark v-show="model" class="checkbox--icon" />
    </button>
    <span class="checkmark"></span>
  </label>

  <label v-if="inputType === 'text' || inputType === 'email'" class="label">
    <div class="label--inner">
      <p class="labe--description">{{ description }}</p>
    </div>
    <input
      class="label--input"
      :type="inputTypeRef"
      :placeholder="placeholder"
      v-model="model"
    />
    <p class="label--invalid">{{ error }}</p>
  </label>

  <label v-if="inputType === 'password'" class="label">
    <div class="label--inner">
      <p class="labe--description">{{ description }}</p>
      <button class="label--show-hide" @click="toggleInputType">
        <PassShow v-show="inputTypeRef === 'password'" />
        <PassHidden v-show="inputTypeRef === 'text'" />
      </button>
    </div>
    <input
      class="label--input"
      :type="inputTypeRef"
      :placeholder="placeholder"
      @input="model = inputValue"
      v-model="inputValue"
    />
    <p class="label--invalid">{{ error }}</p>
  </label>
</template>

<style scoped>
@import url("./label-control.css");
</style>

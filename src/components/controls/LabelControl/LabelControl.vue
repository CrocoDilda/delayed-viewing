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

const model = defineModel<string>()

const props = defineProps<Props>()
const inputTypeRef = ref(props.inputType)
const inputValue = ref("")

function toggleInputType() {
  inputTypeRef.value = inputTypeRef.value === "password" ? "text" : "password"
}
localStorage
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
    <input
      :type="inputTypeRef"
      :placeholder="placeholder"
      class="label--input"
      @input="model = inputValue"
      v-model="inputValue"
    />
    <p class="label--invalid">{{ error }}</p>
  </label>
</template>

<style scoped>
@import url("./label-control.css");
</style>

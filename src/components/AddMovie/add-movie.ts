import { ref } from "vue"

export function useShowInfo() {
  return {
    showInfo,
    changeShowInfo,
  }
}

const showInfo = ref<boolean>(false)

// инвертирую showInfo
function changeShowInfo() {
  showInfo.value = !showInfo.value
}

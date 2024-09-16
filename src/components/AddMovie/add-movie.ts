import { ref } from "vue"

const showInfo = ref<boolean>(false)

// инвертирую showInfo
function changeShowInfo() {
  showInfo.value = !showInfo.value
}

export { changeShowInfo, showInfo }

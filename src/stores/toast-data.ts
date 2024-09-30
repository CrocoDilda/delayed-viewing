import { defineStore } from "pinia"

export const useToastStore = defineStore("toastData", {
  state: () => ({
    filmName: "",
    toastSuccess: true,
    toastIsShow: false,
    errorMessage: "",
    message: "",
  }),
  actions: {
    callToast() {
      this.toastIsShow = false
      setTimeout(() => {
        this.toastIsShow = true
      }, 100)
    },
  },
})

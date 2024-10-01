import { defineStore } from "pinia"

export const useToastStore = defineStore("toastData", {
  state: () => ({
    filmName: "",
    toastSuccess: true,
    toastIsShow: false,
    errorMessage: "",
    message: "",
    className: "visible",
    toastTimeout: <number | null>null, // Ссылка на текущий таймер
  }),
  actions: {
    callToast() {
      this.className = "visible"
      this.toastIsShow = false
      if (this.toastTimeout) {
        clearTimeout(this.toastTimeout)
      }
      this.toastTimeout = setTimeout(() => {
        this.toastIsShow = true
      }, 100)
      this.toastTimeout = setTimeout(() => {
        this.closeToast()
      }, 4000)
    },

    closeToast() {
      this.className = "hidden"
      if (this.toastTimeout) {
        clearTimeout(this.toastTimeout)
      }
      this.toastTimeout = setTimeout(() => {
        this.filmName = ""
        this.toastSuccess = true
        this.toastIsShow = false
        this.errorMessage = ""
        this.message = ""
      }, 1000)
    },
  },
})

import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0, // Состояние счетчика
  }),
  actions: {
    increment() {
      this.count++ // Увеличиваем счетчик на 1
    },
    decrement() {
      this.count-- // Уменьшаем счетчик на 1
    },
    reset() {
      this.count = 0 // Сбрасываем счетчик в 0
    },
  },
  getters: {
    doubleCount(): number {
      return this.count * 2 // Возвращаем удвоенное значение счетчика
    },
  },
})

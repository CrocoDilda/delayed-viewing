import { defineStore } from "pinia"

type ApiKey = string

export const useApiKey = defineStore("apiKey", {
  state: () => ({
    apiKey: "0TRXKX0-4QCM482-GQQPR1K-C8Z4MAT" as ApiKey,
  }),
})

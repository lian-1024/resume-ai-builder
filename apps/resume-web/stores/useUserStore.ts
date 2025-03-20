import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const isLoggedIn = ref(false)

    function setToken(newToken: string) {
      token.value = newToken
      isLoggedIn.value = true
    }

    function logout() {
      token.value = ''
      isLoggedIn.value = false
    }

    return {
      token,
      isLoggedIn,
      setToken,
      logout
    }
  },
  {
    persist: {
      // 只在客户端持久化
      storage: process.client ? localStorage : undefined
    }
  }
)

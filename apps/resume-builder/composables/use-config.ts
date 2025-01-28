import { ref } from 'vue';

export function useConfig() {
  const config = ref({
    primaryColor: "#4672f1"
  })

  return {
    config
  }
}
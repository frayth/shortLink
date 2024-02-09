import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const UserLink = defineStore('userLink', () => {
  const userLink = ref('')

  function setLink(value: string): void {
    userLink.value = value
  }

  async function getLink(): Promise<string> {
    const request = await fetch('http://apisutom.laurisceresoli.fr/word', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }, 
    })
    const response = await request.json()
    return response

  }

  return { userLink, setLink,getLink }
})

export const WindowInfo = defineStore('windowInfo', () => {
  const width:Ref<number> = ref(0)
  function setWindow(value: number): void {
    width.value = value
  }
  return { width, setWindow }
})
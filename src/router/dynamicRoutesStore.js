import { defineStore } from 'pinia'
import { ref } from 'vue'
export default defineStore('dynamicRoutes', () => {
  const accessRoutes = ref([{
    path: '/',
    name: 'home'
  }])
  const initAccessRoutes = async () => {}
  return {
    accessRoutes,
    initAccessRoutes
  }
})

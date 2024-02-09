<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/HeaderComp.vue'
import { WindowInfo } from './stores/counter';
import { onMounted } from 'vue'

const windowInfo=WindowInfo()

onMounted(()=>{
  addEventListener('resize',()=>{
    windowInfo.setWindow(window.innerWidth)
  })
})

</script>

<template>
<Header class="header"/>
  <RouterView />
</template>

<style scoped>
.header{
  width: 100%;
}

</style>

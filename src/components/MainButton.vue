<template>
  <div class="signup flexContain">
    <button>{{props.msg}}</button>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  const props=defineProps<{
    msg: string
  }>()
</script>

<style scoped>
.signup{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-Cyan);
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  white-space: nowrap;
  color: white;
  max-width: 200px;
  width: fit-content;
  
}
.flexContain{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.signup:hover{
  background-color: var(--primary-Dark-Violet);
}
button{
  border: none;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
</style>
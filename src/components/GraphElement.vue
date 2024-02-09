<template>
  <div class="main" :style="{marginTop:`${props.margin}`}">
    <div class="svg-container">
      <slot name="svg" ></slot>
    </div>
    <slot name="title"></slot>
    <slot name="description"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
  const test = ref()
  onMounted(()=>{
    console.log(test.value)
  })
  const props = defineProps<{
    margin: string
  }>()

</script>

<style scoped>
.svg-container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Neutral-Very-Dark-Blue);
  width: fit-content;
  height: fit-content;
  padding: clamp(5px,2dvw,20px);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50% ,-50%);
}
.main{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  color: white;
  padding: clamp(20px,2dvw,50px) clamp(5px,2dvw,20px) clamp(5px,2dvw,20px) clamp(5px,2dvw,20px);
  background-color: white;
  border-radius: 10px;
  width:30%;
  height: 230px;
  color: black;
  position: relative;

}
</style>
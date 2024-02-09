<template>
  <div class="main">
    <div class="mainCont">
      <h1>More than just shorter links</h1>
      <p>Build your brand's recognition and get detailed insights on how yours links are performing</p>
      <Button msg="Get Started" class="button"/>
    </div>
    <img  class="test" ref="image" src="../../public/images/illustration-working.svg" alt="llustration-working">
  </div>
</template>

<script setup lang="ts">
import Button from './MainButton.vue'
import { WindowInfo } from '@/stores/counter';
import { ref,watch,computed } from 'vue'
const windowInfo=WindowInfo()
const image=ref()
const width=computed(()=>windowInfo.width)
watch(width,(newVal)=>{
  if(newVal<750){
    console.log(Math.floor(newVal*16/750))
    image.value.style.width=`66%`
  }
  else if (newVal>=900){
    image.value.style.width='50%'
  }
  else{
    image.value.style.width=`${50+Math.floor(((900 - newVal) / 150) * 16)}%` 
  }
})
</script>

<style scoped>
.main{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding:0px 10%;
  position: relative;
  width: 100%;
  height: fit-content;
  margin: 50px 0 200px 0;

}
.mainCont{
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-basis: 50%;
  padding: 30px 0;
}
.mainCont h1{
  font-size: 2.5rem;
  line-height: 2.7rem;
  font-weight: 700;
  color: var(--Neutral-Very-Dark-Violet);
}
.mainCont p{
  font-size: 0.8rem;
  line-height: 1.5rem;
  max-width: 90%;
  width: 100%;
  color: var(--Neutral-Grayish-Violet);
}
.test{
  position: absolute;
  right: -90px;
  top: 0;
  width: clamp(50%,2dvw,60%);
}
.button{
  margin: 30px 0 0 0;
}
</style>
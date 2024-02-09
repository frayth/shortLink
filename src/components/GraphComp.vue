<template>
  <div class="graph">
    
    <Element class="element" margin="0px">
      <template #svg>
        <img src="../../public/images/icon-brand-recognition.svg" alt="">
      </template>
      <template #title>
        <h2>Brand Recognition</h2>
      </template>
      <template #description>
        <p class="text-desc">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
      </template>
    </Element>
    <Element class="element" margin="45px">
      <template #svg>
        <img src="../../public/images/icon-detailed-records.svg" alt="">
      </template>
      <template #title>
        <h2>Detailed Records</h2>
      </template>
      <template #description>
        <p class="text-desc">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
      </template>
    </Element>
    <Element class="element" margin="90px">
      <template #svg>
        <img src="../../public/images/icon-fully-customizable.svg" alt="">
      </template>
      <template #title>
        <h2>Fully Customizable</h2>
      </template>
      <template #description>
        <p class="text-desc">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
      </template>
    </Element>
  </div>
</template>

<script setup lang="ts">
import Element from './GraphElement.vue'
</script>

<style scoped>
img{
  width: clamp(15px,2dvw,30px);
  height: clamp(15px,2dvw,30px);
}
.text-desc{
  font-size:clamp(8px,2dvw,12px);
  font-weight: 400;
  color: var(--Neutral-Grayish-Violet);
  text-align: left
}
.graph{
  display: flex;
  gap: 30px;
  margin-top: 100px;
}
h2{
  font-size: clamp(10px,2dvw,20px);
}
</style>
<script setup lang="ts">
import Pres from '../components/MainPres.vue'
import Search from '../components/SearchBar.vue'
import Graph from '../components/GraphComp.vue'
</script>

<template>
  <Pres class="pres"/>
  <div class="mainContent">
    <Search class=" search"/>
    <div class="link"></div>
    <div class="stat">
      <h1>Advanced Statistics</h1>
      <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
    </div>
    <div class="graph-cont">
      <div class="bar"></div>
      <Graph></Graph>
    </div>
    
  </div>

</template>

<style scoped>
.pres{
width: 100%;
  
}
.mainContent{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: var(--Neutral-Gray);
  height:fit-content;
  width: 100%;
  position: relative;
  padding: 50px 10%;
}
.search{
  transform: translateY(-50%);
  position: absolute;
  width: 80% !important;
}
.stat{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}
.link{
  min-height: 150px;
  margin-top: 80px;
  width: 100%;
}
.bar{
  width: 80%;
  height: 5px;
  background-color: var(--primary-Cyan);
  border-radius: 10px;
  position:absolute;
  top: 60%;
  left: 10%;
}
.graph-cont{
  position: relative;
}
</style>
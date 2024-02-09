<template>
  <div class="main">
    <div class="container">
      <input ref="input" type="text"  placeholder="Shorten a link here.." v-model="searchBar.input"/>
      <button @click="handleClick">Shorten it!</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref,onMounted } from 'vue'
import {UserLink} from '../stores/counter'

const link=UserLink()
interface SearchBar {
  input: string
}
const input =ref()

onMounted(()=>{
  input.value.focus()
})

const searchBar: SearchBar = reactive({
  input: ''
})
const handleClick = async() => {
  if(searchBar.input){
    input.value.classList.remove('error')
    link.setLink(searchBar.input)
    const test=await link.getLink()
    console.log(test)
  }
  else{
    input.value.classList.add('error')
  }
}

</script>

<style scoped>
.main {
  background-image: url('../../public/images/bg-shorten-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: fit-content;
  padding: 40px 5%;
  background-color: var(--primary-Dark-Violet);
  border-radius: 10px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  width: 100%;
}
input {
  border-radius: 10px;
  width: 100%;
  flex-basis: 70%;
  height: 50px;
  padding: 0 0 0 20px;
  border: none;
  outline: none;
  flex-basis: calc(100% - 150px);
}
.error{
  border: 1px solid red;

}
button {
  border-radius: 10px;
  background-color: var(--primary-Cyan);
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding: 0 20px;
  height: 50px;
  cursor: pointer;
  border: none;
  outline: none;
  flex-basis: 150px;
}
button:hover {
  filter: brightness(1.1);
}
</style>

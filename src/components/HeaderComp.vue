<template>
  <div class="main">
    <h1>Shortly</h1>
    <div class="list">
      <p>Features</p>
      <p>Pricing</p>
      <p>Resources</p>
    </div>
    <div class="action">
      <div class="flexContain login"><p>Login</p></div>
      <Button msg="Sign Up"></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from './MainButton.vue'
</script>

<style scoped>
.main{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 10%;
  gap: 30px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

}
h1{
  font-size: 2rem;
  font-weight: 700;
  color: black;
  cursor: pointer;
}
.list{
  display: flex;
  gap: 20px;
  flex-basis: 75%;
  color: var(--Neutral-Grayish-Violet);
  font-size: 18px;
  font-weight: 700;

}
.list p{
  cursor: pointer;
}
.list p:hover,
.login:hover
{
  color: black;
}
.action{
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  flex-basis: 25%;
  color: var(--Neutral-Grayish-Violet);
  font-weight: 700;
}


.flexContain{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
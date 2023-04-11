<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">
    <Child :messageParent="msg" :dateNumParent="dateNum" @click="changeBta"/>-->
    <Category/>
  </div>
</template>

<script>
/*import Child  from './components/Child.vue';*/
import Category from "@/components/Category.vue";

export default {
  name: 'App',
  components: {
    Category,
  },
/*
  components: {
    Child,
  },
    data(){
      return{
          msg:"I am father component to child component",
          dateNum:"2023-04-07",
      }
    },
*/

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    displau: flex;
    justify-content: space-around;

}
</style>

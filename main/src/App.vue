<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>这是主应用Vue3</h1>
  <WujieVue url="http://127.0.0.1:5174" name="vue-demo"></WujieVue>
  <WujieVue url="http://127.0.0.1:5175" name="react-demo"></WujieVue>
</template>

<style scoped>

</style>

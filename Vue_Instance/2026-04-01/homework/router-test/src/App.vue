<template>
  <div class="container">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>

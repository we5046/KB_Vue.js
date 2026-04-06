<template>
  <div class="container">
    <AppHeader />
    <AppNav />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
</script>

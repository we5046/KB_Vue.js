<template>
  <div class="card card-body shadow">
    <h2>Videos</h2>
    <p>연결 통로: {{ route.fullPath }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route);
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="mb-3">About</h2>
      <p>이 페이지는 routerfirst 프로젝트 소개 페이지입니다.</p>
      <p><strong>현재 path:</strong> {{ route.path }}</p>
      <p><strong>현재 fullPath:</strong> {{ route.fullPath }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

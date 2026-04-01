<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="mb-3">Search</h2>
      <p><strong>검색어:</strong> {{ route.query.keyword || '없음' }}</p>
      <p><strong>현재 주소:</strong> {{ route.fullPath }}</p>

      <div class="mt-3">
        <button class="btn btn-primary me-2" @click="searchVue">
          vue 검색
        </button>
        <button class="btn btn-warning me-2" @click="searchRouter">
          router 검색
        </button>
        <button class="btn btn-secondary" @click="moveStudents">
          학생 목록으로 이동
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const searchVue = () => {
  router.push({
    path: '/search',
    query: { keyword: 'vue' },
  });
};

const searchRouter = () => {
  router.push({
    path: '/search',
    query: { keyword: 'router' },
  });
};

const moveStudents = () => {
  router.push('/students');
};
</script>

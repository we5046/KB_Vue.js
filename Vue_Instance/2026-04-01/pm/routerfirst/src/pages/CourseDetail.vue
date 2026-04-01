<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="mb-3">Course Detail</h2>
      <p><strong>강의 번호:</strong> {{ id }}</p>
      <p><strong>현재 주소:</strong> {{ route.fullPath }}</p>

      <div class="mt-3">
        <button class="btn btn-primary me-2" @click="goSearch">
          관련 검색으로 이동
        </button>
        <button class="btn btn-outline-secondary" @click="goList">
          강의 목록으로 이동
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  id: String,
});

const route = useRoute();
const router = useRouter();

const goSearch = () => {
  router.push({
    path: '/search',
    query: { keyword: `course-${props.id}` },
  });
};

const goList = () => {
  router.push('/courses');
};
</script>

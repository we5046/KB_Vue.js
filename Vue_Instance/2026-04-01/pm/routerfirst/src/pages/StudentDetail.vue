<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="mb-3">Student Detail</h2>
      <p><strong>학생 번호:</strong> {{ id }}</p>
      <p><strong>현재 fullPath:</strong> {{ route.fullPath }}</p>

      <div class="mt-3">
        <button class="btn btn-success me-2" @click="goHome">
          Home으로 이동
        </button>
        <button class="btn btn-outline-dark" @click="goBack">뒤로 가기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

defineProps({
  id: String,
});

const route = useRoute();
const router = useRouter();

const goHome = () => {
  router.push('/');
};

const goBack = () => {
  router.go(-1);
};
</script>

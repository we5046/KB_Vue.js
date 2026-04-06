<template>
  <div class="bg-light min-vh-100 py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h1 class="fw-bold text-primary">Pinia 게시판</h1>
        <p class="text-muted">
          Vue 3 + Pinia + Bootstrap 기반의 간단한 게시판 예제
        </p>
      </div>

      <div class="row g-4">
        <div class="col-lg-4">
          <BoardForm />
        </div>

        <div class="col-lg-8">
          <BoardList />
          <BoardDetail />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BoardDetail from './components/BoardDetail.vue';
import BoardForm from './components/BoardForm.vue';
import BoardList from './components/BoardList.vue';
</script>

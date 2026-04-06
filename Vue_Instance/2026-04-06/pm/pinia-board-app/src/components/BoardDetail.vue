<script setup>
import { useBoardStore } from '@/stores/boardStore';

// store 사용
const boardStore = useBoardStore();
</script>

<template>
  <div v-if="boardStore.selectedBoard" class="card shadow-sm border-0 mt-4">
    <div
      class="card-header bg-info text-white d-flex justify-content-between align-items-center"
    >
      <span class="fw-bold">게시글 상세보기</span>

      <button
        class="btn btn-sm btn-light"
        @click="boardStore.clearSelectedBoard"
      >
        닫기
      </button>
    </div>

    <div class="card-body">
      <h3 class="mb-3">
        {{ boardStore.selectedBoard.title }}
      </h3>

      <div class="mb-2">
        <strong>작성자:</strong>
        {{ boardStore.selectedBoard.writer }}
      </div>

      <div class="mb-3">
        <strong>작성일:</strong>
        {{ boardStore.selectedBoard.createdAt }}
      </div>

      <hr />

      <p style="white-space: pre-line">
        {{ boardStore.selectedBoard.content }}
      </p>
    </div>
  </div>
</template>

<template>
  <div class="card shadow-sm border-0">
    <div
      class="card-header bg-dark text-white d-flex justify-content-between align-items-center"
    >
      <span class="fw-bold">게시글 목록</span>
      <span class="badge bg-warning text-dark">
        총 {{ boardStore.boardCount }}개
      </span>
    </div>

    <div class="card-body p-0">
      <table class="table table-hover mb-0 text-center align-middle">
        <thead class="table-light">
          <tr>
            <th style="width: 10%">번호</th>
            <th style="width: 35%">제목</th>
            <th style="width: 20%">작성자</th>
            <th style="width: 20%">작성일</th>
            <th style="width: 15%">관리</th>
          </tr>
        </thead>

        <tbody>
          <!-- 데이터 없을 때 -->
          <tr v-if="boardStore.boards.length === 0">
            <td colspan="5" class="text-muted py-4">
              등록된 게시글이 없습니다.
            </td>
          </tr>

          <!-- 게시글 목록 -->
          <tr v-for="(board, index) in reverseBoard" :key="board.id">
            <td>{{ reverseBoard.length - index }}</td>

            <td class="text-start">
              <a
                href="#"
                class="text-decoration-none fw-semibold"
                @click.prevent="viewDetail(board)"
              >
                {{ board.title }}
              </a>
            </td>

            <td>{{ board.writer }}</td>
            <td>{{ board.createdAt }}</td>

            <td>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="removeBoard(board.id)"
              >
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useBoardStore } from '@/stores/boardStore';
const boardStore = useBoardStore();

//상세보기
const viewDetail = (board) => {
  boardStore.selectBoard(board);
};

//삭제
const removeBoard = (id) => {
  if (confirm('정말 삭제하실 건가요?')) {
    boardStore.deleteBoard(id);
  }
};

const reverseBoard = computed(() => {
  return [...boardStore.boards].reverse();
});
</script>

<style scoped></style>

import { defineStore } from 'pinia';

export const useBoardStore = defineStore('board', {
  state: () => ({
    // 게시글 목록
    boards: [
      {
        id: 1,
        title: '첫 번째 게시글',
        writer: '관리자',
        content: 'Pinia 게시판 예제입니다.',
        createdAt: '2026-04-06',
      },
      {
        id: 2,
        title: '두 번째 게시글',
        writer: '홍길동',
        content: 'Bootstrap으로 예쁘게 꾸며봅시다.',
        createdAt: '2026-04-06',
      },
    ],

    // 현재 선택된 게시글
    selectedBoard: null,
  }),

  // -----------------------------
  // getters : 계산된 값
  // -----------------------------
  getters: {
    // 전체 게시글 개수 반환
    boardCount(state) {
      return state.boards.length;
    },
  },

  // -----------------------------
  // actions : 상태 변경 함수
  // -----------------------------
  actions: {
    // 게시글 추가
    addBoard(board) {
      this.boards.push({
        // this.boards.unshift({
        id: Date.now(), // 고유 ID 생성
        title: board.title,
        writer: board.writer,
        content: board.content,

        // 날짜 생성 (중요 수정 부분)
        createdAt: new Date().toISOString().slice(0, 10),
      });
    },

    // 게시글 삭제
    deleteBoard(id) {
      // 해당 id 제외하고 다시 배열 생성
      this.boards = this.boards.filter((board) => board.id !== id);

      // 상세보기 중이던 게시글이 삭제되면 초기화
      if (this.selectedBoard && this.selectedBoard.id === id) {
        this.selectedBoard = null;
      }
    },

    // 상세 게시글 선택
    selectBoard(board) {
      this.selectedBoard = board;
    },

    // 상세 닫기
    clearSelectedBoard() {
      this.selectedBoard = null;
    },
  },
});

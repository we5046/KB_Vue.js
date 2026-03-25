<!-- 사용자 입력 UI -->
<template>
  <div class="input-row">
    <!-- 입력창
         v-model → 입력값을 studentName과 양방향 바인딩 -->
    <input type="text" v-model="studentName" placeholder="학생 이름 입력" />
    <!-- 버튼 클릭 시 sendName 메서드 실행 -->
    <button @click="sendName">등록</button>
  </div>
</template>

<script>
export default {
  // 컴포넌트 이름
  name: 'StudentInput',

  // emit 이벤트 정의 (Vue3)
  emits: {
    // 'add-student' 이벤트 발생 시
    // 전달되는 값(value)에 대한 검증 함수
    'add-student': (value) => {
      // 문자열이고, 공백 제거 후 길이가 2 이상이면 true
      return typeof value === 'string' && value.trim().length >= 2;
    },
  },

  // 상태 데이터
  data() {
    return {
      // 입력창과 연결된 값
      studentName: '',
    };
  },

  // 메서드 정의
  methods: {
    // 버튼 클릭 시 실행되는 함수
    sendName() {
      // 앞뒤 공백 제거
      const trimmedName = this.studentName.trim();

      // 유효성 검사 (2글자 미만이면 종료)
      if (trimmedName.length < 2) {
        alert('이름은 두 글자 이상 입력하세요.');
        return;
      }

      // 부모 컴포넌트로 이벤트 전달
      // 'add-student' 이벤트 발생 + 값 전달
      this.$emit('add-student', trimmedName);

      // 입력창 초기화
      this.studentName = '';
    },
  },
};
</script>

<style scoped>
/* 현재 컴포넌트에만 적용되는 스타일 */

.input-row {
  display: flex; /* 가로 정렬 */
  gap: 10px; /* 요소 간격 */
  margin-bottom: 18px; /* 아래 여백 */
}

input {
  flex: 1; /* 입력창이 가로를 채움 */
  padding: 10px;
}

button {
  padding: 10px 16px;
  border: none;
  background: #2d6cdf;
  color: white;
  border-radius: 8px;
}
</style>

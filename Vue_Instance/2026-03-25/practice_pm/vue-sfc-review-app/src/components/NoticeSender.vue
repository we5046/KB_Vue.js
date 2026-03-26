<template>
  <div class="sender-box">
    <h3>공지 발송</h3>

    <div class="row">
      <input
        type="text"
        v-model="message"
        placeholder="공지 내용을 입력하세요"
      />

      <button @click="sendNotice">발송</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeSender',

  data() {
    return {
      // 사용자가 입력하는 공지사항 텍스트를 담는 변수
      message: '',
    };
  },

  methods: {
    sendNotice() {
      // 1. 앞뒤 공백 제거
      const trimmed = this.message.trim();

      // 2. 유효성 검사: 빈 값일 경우 발송 중단
      if (trimmed === '') {
        alert('공지 내용을 입력하세요.');
        return;
      }

      /* 3. Mitt 이벤트 발신 (핵심!)
         - 'notice': 이벤트 이름 (수신측인 Receiver와 약속된 이름)
         - trimmed: 전달할 데이터 (공지 내용)
         - globalProperties에 등록된 emitter를 호출하는 방식입니다.
      */
      //외부 이벤트버스
      this.emitter.emit('notice', trimmed);

      // 4. 발송 완료 후 입력창 초기화
      this.message = '';
    },
  },
};
</script>

<style scoped>
.sender-box {
  padding: 12px;
  background: #f5f7fb; /* 송신부는 연한 푸른색 배경으로 구분 */
  border-radius: 10px;
}

.row {
  display: flex; /* 가로 배열 */
  gap: 10px; /* 입력창과 버튼 사이 간격 */
}

input {
  flex: 1; /* 입력창이 남는 공간을 모두 차지하도록 설정 */
  padding: 10px;
}

button {
  border: none;
  background: #2d6cdf; /* 강조색(블루) 적용 */
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1a52b8; /* 마우스 오버 시 색상 변경 효과 */
}
</style>

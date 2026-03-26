<template>
  <div class="receiver-box">
    <h3>수신된 공지</h3>
    <p>{{ receivedMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'NoticeReceiver',

  data() {
    return {
      // 수신된 공지 내용을 저장할 변수
      receivedMessage: '아직 수신된 공지가 없습니다.',
    };
  },

  // 1. 컴포넌트가 생성될 때 (Created 라이프사이클)
  created() {
    /* 이벤트 리스너 등록:
       'notice'라는 이름의 신호가 오면, this.receiveNotice 메서드를 실행함 
    */
    this.emitter.on('notice', this.receiveNotice);
  },

  // 2. 컴포넌트가 파괴되기 직전 (BeforeUnmount 라이프사이클)
  beforeUnmount() {
    /* 이벤트 리스너 해제 (중요!):
       컴포넌트가 사라져도 리스너가 메모리에 남아있으면 중복 수신이나 메모리 누수가 발생함
       반드시 수동으로 꺼줘야 함
    */
    this.emitter.off('notice', this.receiveNotice);
  },

  methods: {
    // 3. 이벤트 발생 시 실행될 콜백 함수
    receiveNotice(msg) {
      // Sender가 보낸 데이터(msg)를 변수에 할당하여 화면을 갱신
      this.receivedMessage = msg;
    },
  },
};
</script>

<style scoped>
.receiver-box {
  padding: 12px;
  background: #fff6dd; /* 수신부는 따뜻한 노란색 배경으로 구분 */
  border-radius: 10px;
}

p {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #d4a017; /* 텍스트 강조색 */
}
</style>

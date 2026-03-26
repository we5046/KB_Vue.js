<template>
  <div class="box">
    <h2>예제 4. 공지 발송 앱</h2>

    <p class="desc">
      mitt를 이용하여 형제 컴포넌트 사이에 메시지를 전달하는 구조
    </p>

    <NoticeSender />
    <hr />
    <NoticeReceiver />
  </div>
</template>

<script>
import NoticeSender from './NoticeSender.vue';
import NoticeReceiver from './NoticeReceiver.vue';

export default {
  name: 'Example4NoticeMitt',
  components: {
    NoticeSender,
    NoticeReceiver,
  },
};
</script>

<style scoped>
.box {
  padding: 12px;
}

.desc {
  color: #666;
  margin-bottom: 16px;
}

hr {
  margin: 20px 0;
}
</style>

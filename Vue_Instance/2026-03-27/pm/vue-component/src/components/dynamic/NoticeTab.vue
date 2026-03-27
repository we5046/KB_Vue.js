<template>
  <div class="tab-box">
    <h2>공지사항</h2>
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        {{ notice.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NoticeTab',
  data() {
    return {
      notices: [
        { id: 1, title: '1학기 중간 점검 안내' },
        { id: 2, title: '과제 제출 기한 공지' },
        { id: 3, title: '프로젝트 발표 일정 안내' },
      ],
    };
  },
};
</script>

<style scoped>
.tab-box {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}
ul {
  padding-left: 20px;
}
li {
  margin-bottom: 8px;
}
</style>

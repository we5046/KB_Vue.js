<template>
  <div class="tab-box">
    <h2>Q&amp;A</h2>
    <ul>
      <li v-for="item in qnaList" :key="item.id">
        <strong>Q.</strong> {{ item.question }}<br />
        <strong>A.</strong> {{ item.answer }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QnaTab',
  data() {
    return {
      qnaList: [
        {
          id: 1,
          question: 'Vue에서 동적 컴포넌트는 왜 사용하나요?',
          answer: '탭 전환처럼 컴포넌트를 바꿔가며 보여줄 때 사용합니다.',
        },
        {
          id: 2,
          question: 'keep-alive는 언제 쓰나요?',
          answer: '탭 상태를 유지하고 싶을 때 사용합니다.',
        },
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
  padding-left: 0;
  list-style: none;
}
li {
  margin-bottom: 14px;
  line-height: 1.6;
}
</style>

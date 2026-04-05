<!-- src/views/PostWrite.vue -->
<template>
  <div class="container mt-4">
    <h2>새 맛집 리뷰 작성</h2>

    <!-- form 태그에 이벤트 모디파이어(.prevent)를 써서 새로고침을 막습니다 -->
    <form @submit.prevent="submitPost" class="mt-4">
      <div class="mb-3">
        <label class="form-label">제목</label>
        <!-- TODO 1: formData 안의 title과 양방향 바인딩하기 -->
        <input type="text" class="form-control" v-model="formData.title" />
      </div>

      <div class="mb-3">
        <label class="form-label">작성자</label>
        <!-- TODO 2: formData.author와 양방향 바인딩 -->
        <input type="text" class="form-control" v-model="formData.author" required />
      </div>

      <div class="mb-3">
        <label class="form-label">별점 (1~5)</label>
        <!-- TODO 3: formData.rating과 양방향 바인딩 -->
        <select class="form-select" v-model="formData.rating">
          <option value="5">5점 - 최고예요</option>
          <option value="4">4점 - 좋아요</option>
          <option value="3">3점 - 보통이에요</option>
          <option value="2">2점 - 별로예요</option>
          <option value="1">1점 - 최악이에요</option>
        </select>
      </div>

      <div class="mb-3 form-check">
        <!-- TODO 4: formData.isRecommended와 양방향 바인딩 (체크박스) -->
        <input
          type="checkbox"
          class="form-check-input"
          id="recommend"
          v-model="formData.isRecommended"
        />
        <label class="form-check-label" for="recommend"
          >이 맛집을 다른 사람에게도 추천합니다!</label
        >
      </div>

      <div class="mb-3">
        <label class="form-label">리뷰 내용</label>
        <textarea class="form-control" rows="5" v-model="formData.content" required></textarea>
      </div>

      <div class="d-flex gap-2">
        <!-- 저장 버튼 (type="submit"이라서 누르면 submitPost 함수가 실행됨) -->
        <button type="submit" class="btn btn-primary">저장하기</button>
        <!-- 취소 버튼 (클릭 시 뒤로 가기) -->
        <button type="button" class="btn btn-secondary" @click="goBack">취소</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

// 사용자가 입력할 데이터를 담아둘 객체 (초기값 세팅)
const formData = ref({
  title: '',
  author: '',
  rating: 5,
  isRecommended: true,
  content: '',
  createdAt: new Date().toISOString().split('T')[0], // 오늘 날짜 자동 입력
});

// 서버로 데이터를 전송하는 함수
const submitPost = async () => {
  try {
    // TODO 5: axios를 이용해 http://localhost:3000/posts 로 POST 요청 보내기
    // 힌트: axios.post('주소', 보낼데이터)
    // 보낼데이터는 formData.value 입니다!
    const response = await axios.post('http://localhost:3000/posts', formData.value);

    // TODO 6: 저장이 완료되면 목록 페이지('/')로 이동시키기
    alert('리뷰가 성공적으로 등록되었습니다!');
    router.push(`/detail/${response.data.id}`);
  } catch (error) {
    console.error('저장에 실패했습니다:', error);
    alert('저장 중 오류가 발생했습니다.');
  }
};

// 취소 버튼 누르면 이전 페이지로 돌아가는 함수
const goBack = () => {
  router.go(-1); // 뒤로 가기 (또는 router.push('/') 사용 가능)
};
</script>

<style scoped></style>

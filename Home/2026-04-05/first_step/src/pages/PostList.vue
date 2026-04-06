<!-- src/views/PostList.vue -->
<template>
  <!-- 부트스트랩 클래스를 이용해 가운데 정렬 및 여백 주기 -->
  <div class="container mt-4">
    <h2 class="mb-4">맛집 리뷰 목록</h2>

    <!-- 글쓰기 페이지로 가는 버튼 -->
    <div class="text-end mb-3">
      <button class="btn btn-primary" @click="goToWrite">리뷰 작성하기</button>
    </div>

    <!-- 카드 리스트 영역 -->
    <div class="row">
      <!-- TODO 3: v-for를 사용해서 posts 배열의 데이터를 반복해서 카드 만들기 -->
      <!-- 힌트: v-for="post in posts" :key="post.id" -->
      <div class="col-md-4 mb-4" v-for="todo in posts" :key="todo.id">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <!-- TODO 4: 콧수염 구문({{ }})을 이용해 데이터 출력하기 -->
            <h5 class="card-title">{{ todo.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">작성자: {{ todo.author }}</h6>
            <p class="card-text">별점: {{ todo.rating }}점</p>

            <button class="btn btn-outline-secondary btn-sm" @click="goToDetail(todo.id)">
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO 1: 필요한 것들 import 하기 (ref, onMounted, axios, useRouter)
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// 변수 준비
const router = useRouter();
const posts = ref([]); // 서버에서 가져온 글 목록을 담을 빈 배열

// 서버에서 데이터를 가져오는 함수
const fetchPosts = async () => {
  try {
    // TODO 2: axios를 이용해 http://localhost:3000/posts 에서 GET 요청하기
    // const response = await axios.get('주소');
    // posts.value 에 response.data 넣기!
    const response = await axios.get('http://localhost:3000/posts');
    posts.value = response.data;
  } catch (error) {
    console.error('데이터를 가져오는데 실패했습니다:', error);
  }
};

// 페이지 이동 함수들
const goToWrite = () => {
  router.push('/write');
};

const goToDetail = (id) => {
  // router.push()를 이용해 /detail/아이디 로 이동하게 만들기
  router.push(`/detail/${id}`);
};

// 컴포넌트가 화면에 나타날 때(onMounted) 데이터 가져오기 실행
onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
/* 카드를 살짝 예쁘게 */
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>

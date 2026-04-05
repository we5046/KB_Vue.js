<!-- 상세 보기 페이지 -->
<template>
  <div class="container mt-4" v-if="post !== null">
    <div class="card shadow-sm">
      <div class="card-header bg-white d-flex justify-content-between align-items-center">
        <h2 class="h4 mb-0">{{ post.title }}</h2>
        <span class="badge bg-primary">별점: {{ post.rating }}점</span>
      </div>
      <div class="card-body">
        <h6 class="text-muted mb-3">작성자: {{ post.author }} | 작성일: {{ post.createdAt }}</h6>
        <hr />
        <p class="card-text lead" style="white-space: pre-wrap">{{ post.content }}</p>

        <div v-if="post.isRecommended" class="alert alert-success mt-4">
          👍 이 작성자가 강력 추천하는 맛집입니다!
        </div>
      </div>
      <div class="card-footer bg-white d-flex gap-2">
        <button class="btn btn-outline-secondary" @click="goBack">목록으로</button>
        <button class="btn btn-danger ms-auto" @click="deletePost">삭제하기</button>
      </div>
    </div>
  </div>
  <div v-else class="container mt-4 text-center">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p class="mt-2">리뷰를 불러오는 중입니다...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const post = ref(null);

// TODO 1: 상세 데이터 가져오기
const fetchPost = async () => {
  try {
    // route.params.id 를 이용해 해당 글의 정보를 가져옵니다.
    const response = await axios.get(`/api/posts/${route.params.id}`);
    console.log(response.data);
    post.value = response.data;
    console.log(post.value);
  } catch (error) {
    console.error('데이터를 가져오는데 실패했습니다:', error);
    alert('존재하지 않는 게시글입니다.');
    router.push('/');
  }
};

// TODO 2: 데이터 삭제하기
const deletePost = async () => {
  if (!confirm('정말로 이 리뷰를 삭제하시겠습니까?')) return;

  try {
    // axios.delete를 이용해 서버에서 데이터를 지웁니다.
    await axios.delete(`/api/posts/${route.params.id}`);
    alert('리뷰가 삭제되었습니다.');
    router.push('/'); // 삭제 후 목록으로 이동
  } catch (error) {
    console.error('삭제에 실패했습니다:', error);
    alert('삭제 중 오류가 발생했습니다.');
  }
};

const goBack = () => {
  router.push('/');
};

onMounted(() => {
  fetchPost();
});
</script>

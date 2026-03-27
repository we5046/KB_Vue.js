<template>
  <div class="tab-box">
    <h2>프로필</h2>
    <div class="profile-card">
      <p><strong>이름:</strong> 홍길동</p>
      <p><strong>직무:</strong> 백엔드 개발자</p>
      <p><strong>관심기술:</strong> Vue, Spring Boot, MyBatis</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileTab',
};
</script>

<style scoped>
.tab-box {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}
.profile-card {
  line-height: 1.8;
}
</style>

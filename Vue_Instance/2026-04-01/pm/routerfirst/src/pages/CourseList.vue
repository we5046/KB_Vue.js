<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="mb-3">Course List</h2>
      <p>강의를 클릭하면 동적 라우트로 상세 페이지에 이동합니다.</p>

      <div class="list-group">
        <RouterLink
          v-for="course in courses"
          :key="course.id"
          class="list-group-item list-group-item-action"
          :to="{ name: 'course-detail', params: { id: course.id } }"
        >
          {{ course.id }}번 - {{ course.title }} / {{ course.teacher }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  { id: 1, title: 'Vue Router 기초', teacher: '이강사' },
  { id: 2, title: 'Spring Boot 입문', teacher: '김강사' },
  { id: 3, title: 'Docker 배포 실습', teacher: '박강사' },
];
</script>

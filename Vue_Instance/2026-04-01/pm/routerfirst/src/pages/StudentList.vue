<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="mb-3">Student List</h2>
      <p>학생을 클릭하면 상세 페이지로 이동합니다.</p>

      <div class="list-group">
        <RouterLink
          v-for="student in students"
          :key="student.id"
          class="list-group-item list-group-item-action"
          :to="{ name: 'student-detail', params: { id: student.id } }"
        >
          {{ student.id }}번 - {{ student.name }} / {{ student.course }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const students = [
  { id: 1, name: '김학생', course: 'Vue.js' },
  { id: 2, name: '이학생', course: 'Spring Boot' },
  { id: 3, name: '박학생', course: 'Docker' },
];
</script>

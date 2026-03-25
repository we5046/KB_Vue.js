<template>
  <div class="app-wraper">
    <header class="header">
      <h1>Vue SFC 복습 프로젝트</h1>
      <p>
        단일 파일 컴포넌트, props, emit, mitt를 한 프로젝트에서 복습하는 예제
        모음
      </p>
      <ExTechCheckList v-if="selectedExample === 1" />
      <ExStudentRegister />
      <ExTodoToggle />
    </header>
  </div>
</template>

<script>
import ExTechCheckList from './components/Example1TechChecklist.vue';
import ExStudentRegister from './components/Example2StudentRegister.vue';
import ExTodoToggle from './components/Example3TodoToggle.vue';

export default {
  name: 'app',
  components: {
    ExTechCheckList,
    ExStudentRegister,
    ExTodoToggle,
  },
  data() {
    return {
      selectedExample: 1,
      menuList: [
        { id: 1, label: '예제 1. Props 기본' },
        { id: 2, label: '예제 2. Emit 기본' },
        { id: 3, label: '예제 3. 단방향 데이터 흐름' },
        { id: 4, label: '예제 4. mitt 형제 통신' },
      ],
    };
  },
};
</script>

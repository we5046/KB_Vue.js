<template>
  <div class="app-wrapper">
    <header class="header">
      <h1>Vue SFC 복습 프로젝트</h1>
      <p>
        단일 파일 컴포넌트, props, emit, mitt를 한 프로젝트에서 복습하는 예제
        모음
      </p>
    </header>

    <nav class="menu">
      <button
        v-for="item in menuList"
        :key="item.id"
        :class="{ active: selectedExample === item.id }"
        @click="selectedExample = item.id"
      >
        {{ item.label }}
      </button>
    </nav>

    <section class="content">
      <Example1TechChecklist v-if="selectedExample === 1" />
      <Example2StudentRegister v-else-if="selectedExample === 2" />
      <Example3TodoToggle v-else-if="selectedExample === 3" />
      <Example4NoticeMitt v-else-if="selectedExample === 4" />
    </section>
  </div>
</template>

<script>
import Example1TechChecklist from './components/Example1TechChecklist.vue';
import Example2StudentRegister from './components/Example2StudentRegister.vue';
import Example3TodoToggle from './components/Example3TodoToggle.vue';
import Example4NoticeMitt from './components/Example4NoticeMitt.vue';

export default {
  name: 'App',
  components: {
    Example1TechChecklist,
    Example2StudentRegister,
    Example3TodoToggle,
    Example4NoticeMitt,
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

<style scoped>
.app-wrapper {
  width: 900px;
  margin: 30px auto;
  background: white;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.header {
  margin-bottom: 20px;
}

.header h1 {
  margin-bottom: 8px;
}

.header p {
  color: #666;
}

.menu {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.menu button {
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  background: #e9edf3;
}

.menu button.active {
  background: #2d6cdf;
  color: white;
}

.content {
  border-top: 1px solid #ddd;
  padding-top: 24px;
}
</style>

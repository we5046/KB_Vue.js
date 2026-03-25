<template>
  <div class="box">
    <h2>예제 1. 관심 기술 체크리스트</h2>

    <p class="desc">
      부모가 배열 데이터를 가지고 있고, 자식 컴포넌트가 props로 받아 출력하는
      구조
    </p>

    <ul class="list">
      <TechItem
        v-for="tech in techList"
        :key="tech.id"
        :name="tech.name"
        :checked="tech.checked"
      />
    </ul>
  </div>
</template>

<script>
import TechItem from './TechItem.vue';

export default {
  name: 'Example1TechChecklist',
  components: {
    TechItem,
  },
  data() {
    return {
      techList: [
        { id: 1, name: 'Java', checked: true },
        { id: 2, name: 'Spring Boot', checked: true },
        { id: 3, name: 'Vue', checked: false },
        { id: 4, name: 'Docker', checked: false },
      ],
    };
  },
};
</script>

<style scoped>
.box {
  padding: 12px;
}

.desc {
  color: #666;
}

.list {
  margin-top: 16px;
}
</style>

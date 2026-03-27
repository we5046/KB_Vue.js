<template>
  <div class="menu-list">
    <h2>메뉴 목록</h2>

    <div class="summary">완료된 작업 수: {{ doneCount }}</div>

    <MenuItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { inject } from 'vue';
import MenuItem from './MenuItem.vue';

export default {
  name: 'MenuList',
  components: {
    MenuItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const doneCount = inject('doneCount', 0);
    return { doneCount };
  },
};
</script>

<style scoped>
.menu-list {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}

.summary {
  margin: 12px 0 14px;
  font-weight: bold;
  color: #333;
}
</style>

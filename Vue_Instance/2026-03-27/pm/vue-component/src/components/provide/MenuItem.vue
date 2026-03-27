<template>
  <div class="menu-item">
    <span class="status" :class="{ done: item.done, todo: !item.done }">
      {{ item.done ? icons.done : icons.todo }}
    </span>
    <span class="label">
      {{ item.name }}
    </span>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const icons = inject('icons', {
      done: '완료',
      todo: '대기',
    });
    return { icons };
  },
};
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-top: 8px;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
}

.status {
  min-width: 48px;
  text-align: center;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: bold;
}

.status.done {
  background: #e0f7e9;
  color: #1f8b4c;
}

.status.todo {
  background: #fff3cd;
  color: #a06a00;
}

.label {
  color: #333;
}
</style>

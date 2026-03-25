<template>
  <li class="todo-item">
    <span :class="{ done: todo.completed }">
      {{ todo.text }} - {{ todo.completed ? '완료' : '미완료' }}
    </span>

    <button @click="$emit('toggle-todo', todo.id)">상태변경</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  //   emits: ['toggle-todo'],
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  padding: 10px 12px;
  background: #f5f7fb;
  border-radius: 8px;
}

.done {
  text-decoration: line-through;
  color: #888;
}

button {
  border: none;
  background: #444;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
}
</style>

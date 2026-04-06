<template>
  <div class="container mt-4">
    <h2>TodoList 테스트(Composition API)</h2>
    <hr />
    <label class="me-3 fw-bold text-nowrap" style="flex-shrink: 0"
      >할일 추가</label
    >
    <div class="input-group mb-3" style="max-width: 600px">
      <input type="text" class="form-control" placeholder="할일을 입력하세요" />
      <button class="btn btn-primary" type="button">추가</button>
    </div>
    <hr />
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        {{ todo.todo }}
        <button id="dangerButton" class="btn btn-outline-danger btn-sm ms-2">
          삭제
        </button>
      </li>
    </ul>
    <div>완료된 할일 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoListStore } from './stores/TodoList';
const todos = ref([]);

const todoListStore = useTodoListStore();

const doneCount = computed(()=>)
</script>
<style scoped>
.todo-item .btn {
  opacity: 0.5;
}
.todo-item:hover .btn {
  opacity: 1;
}
</style>

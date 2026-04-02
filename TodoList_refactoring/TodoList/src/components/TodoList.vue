<template>
  <div class="container mt-3">
    <div class="card card-body py-3">
      <TodoHeader
        :totalTodo="totalTodo"
        :doneTodo="doneTodo"
        :remainTodo="remainTodo"
      ></TodoHeader>
      <TodoInput @add-todo="addTodo"></TodoInput>
      <div v-if="todos.length > 0">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @delete-todo="deleteTodo"
          @toggle-todo="toggleTodo"
        />
      </div>
      <div v-else>아직 할일이 없습니다.</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TodoHeader from './TodoHeader.vue';
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

// 할일 목록
const todos = ref([
  { id: 1, text: 'Vue3 프로젝트 만들기', done: true },
  { id: 2, text: 'Composition API 복습', done: false },
  { id: 3, text: 'TodoList 리팩토링하기', done: false },
  { id: 4, text: '운동', done: false },
  { id: 5, text: '공부', done: false },
]);

// 할일 총 개수
const totalTodo = computed(() => todos.value.length);
// 다한 일 개수
const doneTodo = computed(() => todos.value.filter((todo) => todo.done).length);
// 안한 일 개수
const remainTodo = computed(() => totalTodo.value - doneTodo.value);

//add하는 기능
const addTodo = (text) => {
  todos.value.unshift({
    id: Date.now(),
    text,
    done: false,
  });
};
// delete하는 기능
const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
// toggle하는 기능
const toggleTodo = (id) => {
  let target = todos.value.find((todo) => todo.id === id);
  if (target) {
    target.done = !target.done;
  }
};
</script>

<style scoped>
header {
  text-align: center;
}
nav {
  display: flex;
  margin: 10px;
  gap: 10px;
  height: 100px;
  text-align: center;
}

#navCard {
  background: linear-gradient(to left, wheat, lightpink);
}
</style>

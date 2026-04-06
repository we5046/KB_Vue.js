<template>
  <div>
    <h2>TodoList 테스트(Composition API)</h2>
    <hr />
    할일 추가 :

    <input type="text" v-model="todo" />

    <button class="btn btn-outline-secondary ms-3" @click="addTodoHandler">
      추가
    </button>
    <hr />
    <ul>
      <li v-for="todoItem in todoList">
        <span style="cursor: pointer" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}
        </span>

        <button
          class="btn btn-outline-secondary ms-3"
          @click="deleteTodo(todoItem.id)"
        >
          삭제
        </button>
      </li>
    </ul>
    <div>완료된 할일 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList.js';
import { ref, computed } from 'vue';

const todo = ref('');

const todoListStore = useTodoListStore();
// 아까 count와 todoList의 차이점은?
// count는 primitive type이라서 값 복사가 되었지만,
// todoList는 [] 이라 참조라서 반응성이 유지된다?
const { todoList, addTodo, deleteTodo, toggleDone } = todoListStore;

// 기본 타입에 대해서는 계산된 속성을 다시 작성
const doneCount = computed(() => todoListStore.doneCount);

const addTodoHandler = () => {
  addTodo(todo.value);
  todo.value = '';
};
</script>

<style scoped>
.btn {
  height: 35px;
  text-align: center;
  margin-bottom: 10px;
}
</style>

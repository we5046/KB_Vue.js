<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />
        <button class="btn btn-primary" @click="addTodoHandler">추가</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-todo']);

const todo = ref('');
const addTodoHandler = () => {
  if (todo.value !== '') {
    emit('add-todo', todo.value);
    todo.value = '';
  }
};
</script>

<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
          @delete-todo="forwardDeleteTodo"
          @toggle-completed="forwardCompletedTodo"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';
const props = defineProps({
  todoList: { type: Array, required: true },
});

const emit = defineEmits(['delete-todo', 'toggle-completed']);

const forwardDeleteTodo = (id) => {
  emit('delete-todo', id);
};

const forwardCompletedTodo = (id) => {
  emit('toggle-completed', id);
};
</script>

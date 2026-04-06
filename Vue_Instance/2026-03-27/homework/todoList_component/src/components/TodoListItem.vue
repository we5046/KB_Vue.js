<template>
  <li
    class="list-group-item"
    :class="{ 'list-group-item-success': todoItem.completed }"
    @click="ToggleTodo"
  >
    <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
      {{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}
    </span>
    <span class="float-end badge bg-secondary pointer" @click.stop="deleteTodo">삭제</span>
  </li>
</template>

<script setup>
const props = defineProps({
  todoItem: { type: Object, required: true },
});

const emit = defineEmits(['delete-todo', 'toggle-completed']);

const deleteTodo = () => {
  emit('delete-todo', props.todoItem.id);
};

const ToggleTodo = () => {
  emit('toggle-completed', props.todoItem.id);
};
</script>

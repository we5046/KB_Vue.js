<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['toggle-todo', 'delete-todo']);
</script>

<template>
  <div class="todo-item">
    <label class="todo-left">
      <input
        type="checkbox"
        :checked="props.todo.done"
        @change="emit('toggle-todo', props.todo.id)"
      />
      <span :class="{ done: props.todo.done }">
        {{ props.todo.text }}
      </span>
    </label>

    <button class="delete-btn" @click="emit('delete-todo', props.todo.id)">
      삭제
    </button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #eef2f7;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);
  transition: all 0.2s ease;
}

.todo-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.1);
}

.todo-left {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 18px;
  color: #1f2937;
  flex: 1;
}

.todo-left input[type='checkbox'] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #6366f1;
}

.todo-left span {
  word-break: break-word;
}

.done {
  text-decoration: line-through;
  color: #9ca3af;
}

.delete-btn {
  border: none;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  padding: 11px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.delete-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 16px rgba(239, 68, 68, 0.22);
}
</style>

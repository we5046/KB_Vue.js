<template>
  <div id="input">
    <input
      v-model="inputText"
      class="form-control"
      type="text"
      @keyup.enter="submitTodo"
      placeholder="할 일을 입력하세요."
    />
    <button id="myBtn" class="btn" @click="submitTodo">추가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-todo']);
const inputText = ref('');

const submitTodo = () => {
  const trimmedText = inputText.value.trim();

  if (!trimmedText) return;

  emit('add-todo', trimmedText);
  inputText.value = '';
};
</script>

<style scoped>
#input {
  display: flex;
  margin: 10px 0;
  gap: 10px;
}
#myBtn {
  background: linear-gradient(to left, wheat, lightpink);
  width: 100px;
}
</style>

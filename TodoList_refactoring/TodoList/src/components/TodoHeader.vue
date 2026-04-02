<template>
  <header>
    <h1>Todo List</h1>
    <strong>오늘 해야 할 일을 정리해보세요</strong>
  </header>
  <nav>
    <div class="myCard">
      <div class="card card-body py-3" style="gap: 10px">
        <p>전체</p>
        <strong>{{ totalTodo }}</strong>
      </div>
      <div class="card card-body py-3" style="gap: 10px">
        <p>완료</p>
        <strong>{{ doneTodo }}</strong>
      </div>
      <div class="card card-body py-3" style="gap: 10px">
        <p>남은 일</p>
        <strong>{{ remainTodo }}</strong>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  totalTodo: {
    type: Number,
  },
  doneTodo: {
    type: Number,
  },
  remainTodo: {
    type: Number,
  },
});
</script>

<style>
header {
  text-align: center;
  margin: 10px;
}

.myCard {
  display: flex;
  text-align: center;
  gap: 20px;
}
</style>

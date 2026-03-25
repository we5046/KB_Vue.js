<template>
  <div class="box">
    <h2>예제 3. 할 일 완료 토글 앱</h2>
    <p class="desc">
      객체 props를 자식에게 넘기되, 자식은 직접 수정하지 않고 부모에게 변경
      요청만 보내는 구조
    </p>

    <ul class="todo-list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-todo="toggleTodoHandler"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'Example3TodoToggle',
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'Vue SFC 복습', completed: false },
        { id: 2, text: 'props와 emit 정리', completed: true },
        { id: 3, text: 'mitt 실습', completed: false },
      ],
    };
  },
  methods: {
    toggleTodoHandler(id) {
      const found = this.todos.find((item) => item.id === id);

      if (found) {
        found.completed = !found.completed;
      }
    },
  },
};
</script>

<style scoped>
.box {
  padding: 12px;
}

.desc {
  color: #666;
}

.todo-list {
  margin-top: 16px;
}
</style>

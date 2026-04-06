import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import { todoApi } from '@/api/todoApi'; // 위에서 만든 API 서비스 임포트

export const useTodoListStore = defineStore('todoList', () => {
  // 1. 상태 (State)
  const state = reactive({
    todoList: [],
    isLoading: false,
  });

  // 2. 액션 (Actions) - 로직과 상태 업데이트 담당
  const fetchTodoList = async () => {
    state.isLoading = true;
    try {
      const response = await todoApi.fetchTodos();
      if (response.status === 200) {
        state.todoList = response.data;
      }
    } catch (error) {
      alert('데이터 조회 실패: ' + error);
    } finally {
      state.isLoading = false;
    }
  };

  const addTodo = async ({ todo, desc }, successCallback) => {
    state.isLoading = true;
    try {
      const payload = { todo, desc, done: false };
      const response = await todoApi.addTodo(payload);
      if (response.status === 201) {
        state.todoList.push(response.data);
        if (successCallback) successCallback();
      }
    } catch (e) {
      alert('추가 실패: ' + e);
    } finally {
      state.isLoading = false;
    }
  };

  const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
    try {
      const payload = { id, todo, desc, done };
      const response = await todoApi.updateTodo(id, payload);
      if (response.status === 200) {
        const index = state.todoList.findIndex((t) => t.id === id);
        state.todoList[index] = payload;
        if (successCallback) successCallback();
      }
    } catch (e) {
      alert('변경 실패: ' + e);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await todoApi.deleteTodo(id);
      if (response.status === 200) {
        const index = state.todoList.findIndex((t) => t.id === id);
        state.todoList.splice(index, 1);
      }
    } catch (e) {
      alert('삭제 실패: ' + e);
    }
  };

  const toggleDone = async (id) => {
    const todo = state.todoList.find((t) => t.id === id);
    if (!todo) return;

    const payload = { ...todo, done: !todo.done };
    try {
      const response = await todoApi.updateTodo(id, payload);
      if (response.status === 200) {
        todo.done = payload.done;
      }
    } catch (e) {
      alert('상태 변경 실패: ' + e);
    }
  };

  // 3. 게터 (Getters)
  const todoList = computed(() => state.todoList);
  const isLoading = computed(() => state.isLoading);
  const doneCount = computed(
    () => state.todoList.filter((item) => item.done).length,
  );

  // 외부로 노출
  return {
    todoList,
    isLoading,
    doneCount,
    fetchTodoList,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleDone,
  };
});

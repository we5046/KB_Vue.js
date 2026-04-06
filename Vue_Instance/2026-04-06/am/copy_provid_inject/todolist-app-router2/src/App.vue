<template>
  <div class="container">
    <Header />
    <router-view />
    <Loading v-if="states.isLoading" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
// import { ref, reactive, computed, provide } from 'vue';
import Header from '@/components/Header.vue';
// new
import { useTodoListStore } from '@/stores/todoList.js';
import Loading from '@/components/Loading.vue';

const todoListStore = useTodoListStore();
const isLoading = computed(() => todoListStore.isLoading);
const fetchTodoList = todoListStore.fetchTodoList;
fetchTodoList();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded px-3">
    <RouterLink class="navbar-brand" to="/">routerfirst</RouterLink>

    <button class="navbar-toggler" type="button" @click="toggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="menuClass">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/courses">Courses</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/students">Students</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink
            class="nav-link"
            :to="{ path: '/search', query: { keyword: 'vue' } }"
          >
            Search
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const menuClass = computed(() => {
  return isOpen.value
    ? 'collapse navbar-collapse show'
    : 'collapse navbar-collapse';
});
</script>

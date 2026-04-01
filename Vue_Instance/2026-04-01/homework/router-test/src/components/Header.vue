<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded px-3">
    <RouterLink class="navbar-brand" to="/">이날치(LeeNalChi)</RouterLink>

    <button class="navbar-toggler" type="button" @click="toggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="menuClass">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">홈</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/About">소개</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/Members">멤버</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/Videos">영상</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { reactive, computed } from 'vue';

const state = reactive({ isNavShow: false });

const menuClass = computed(() => {
  return state.isNavShow
    ? 'collapse navbar-collapse show'
    : 'collapse navbar-collapse';
});

const toggleMenu = () => {
  state.isNavShow = !state.isNavShow;
};
</script>

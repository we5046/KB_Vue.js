<template>
  <div class="layout">
    <header class="layout-header">
      <slot name="header">헤더 영역</slot>
    </header>

    <aside class="layout-sidebar">
      <slot name="sidebar">사이드바</slot>
    </aside>

    <main class="layout-content">
      <slot>메인 콘텐츠</slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutFrame',
};
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar content';
  grid-template-columns: 200px 1fr;
  gap: 10px;
}

.layout-header {
  grid-area: header;
  background: #f5f5f5;
  padding: 10px;
}

.layout-sidebar {
  grid-area: sidebar;
  background: #fafafa;
  padding: 10px;
}

.layout-content {
  grid-area: content;
  background: #fff;
  padding: 10px;
}
</style>

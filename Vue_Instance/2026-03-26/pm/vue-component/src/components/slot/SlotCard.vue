<template>
  <div class="card">
    <header class="card-header">
      <slot name="sunghoon">기본 헤더</slot>
    </header>

    <main class="card-body">
      <slot>기본 내용</slot>
    </main>

    <footer class="card-footer">
      <slot name="footer">기본 푸터</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotCard',
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 16px;
  background-color: red;
}
.card-header {
  font-weight: bold;
  margin-bottom: 8px;
  background-color: blue;
}
.card-footer {
  margin-top: 8px;
  font-size: 12px;
  color: gray;
  background-color: purple;
}
</style>

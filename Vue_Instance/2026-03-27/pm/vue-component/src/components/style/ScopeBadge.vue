<template>
  <div class="box">
    <h3>Scoped CSS</h3>
    <span class="badge">SCOPED</span>
  </div>
</template>

<script>
export default {
  name: 'ScopedBadge',
};
</script>

<style scoped>
.box {
  border: 2px solid #4caf50;
  padding: 20px;
  text-align: center;
}

.badge {
  background: green;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
}
</style>

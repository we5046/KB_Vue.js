<template>
  <div class="box">
    <h3>Global CSS</h3>
    <span class="badge">GLOBAL</span>
  </div>
</template>

<script>
export default {
  name: 'GlobalBadge',
};
</script>

<style>
.box {
  border: 2px solid red;
  padding: 20px;
  text-align: center;
}

.badge {
  background: red;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
}
</style>

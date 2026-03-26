<template>
  <div :class="$style.box">
    <h3>CSS Module</h3>
    <span :class="$style.badge">MODULE</span>
  </div>
</template>

<script>
export default {
  name: 'ModuleBadge',
};
</script>

<style module>
.box {
  border: 2px solid blue;
  padding: 20px;
  text-align: center;
}

.badge {
  background: blue;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
}
</style>

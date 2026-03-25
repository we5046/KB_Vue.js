<template>
  <li class="item">
    <input type="checkbox" :checked="checked" />
    <span>{{ name }}</span>
  </li>
</template>

<script>
export default {
  name: 'TechItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
</style>

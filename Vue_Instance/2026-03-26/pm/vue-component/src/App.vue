<template>
  <div class="app-shell">App</div>
  <!-- <StyleExample /> -->
  <SlotExample />
</template>

<script>
import StyleExample from './examples/StyleExample.vue';
import SlotExample from './examples/SlotExample.vue';
export default {
  components: {
    StyleExample,
    SlotExample,
  },
};
</script>

<style>
.app-shell {
  padding: 30px;
</template>

<template>
  <div class="app-shell"></div>
  <!-- <StyleExample /> -->
  <!-- <SlotExample /> -->
  <DynamicExample></DynamicExample>
</template>

<script>
// import StyleExample from './examples/StyleExample.vue';
// import SlotExample from './examples/SlotExample.vue';
import DynamicExample from './examples/DynamicExample.vue';
export default {
  components: {
    // StyleExample,
    // SlotExample,
    DynamicExample,
  },
};
</script>

<style>
.app-shell {
  padding: 30px;
}
</style>

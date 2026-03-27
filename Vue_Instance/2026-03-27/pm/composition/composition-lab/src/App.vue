<template>
  <div>
    <h1>Composition API 실습</h1>
    <Step1Ref></Step1Ref>
  </div>
</template>
<script>
import Step1Ref from './components/Step1Ref.vue';
export default {
  name: 'App',
  components: {
    Step1Ref,
  },
};
</script>

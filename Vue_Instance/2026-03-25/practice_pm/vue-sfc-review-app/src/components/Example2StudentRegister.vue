<template>
  <div class="box">
    <h2>예제 2. 학생 등록 앱</h2>
    <p class="desc">
      자식이 입력값을 가지고 있다가 emit으로 부모에게 전달하고, 부모가 목록을
      관리하는 구조
    </p>
  </div>
</template>

<script>
import StudentInput from './StudentInput.vue';

export default {
  name: 'Example2StudentRegister',
  components: {
    StudentInput,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>

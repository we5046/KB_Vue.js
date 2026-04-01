<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'calc',
  setup() {
    const x = ref(10);
    const y = ref(20);
    let o = ref({ name, age });

    console.log(o.value.name);
    console.log(o.value.age);
    x.value = 20;

    console.log(x);
    console.log(y);

    return { x, y };
  },
};
</script>

<template>
  <div>
    <NoSlotTest />
    <SlotTest />
    <NamedSlotTest />
  </div>
</template>
<script>
import NamedSlotTest from './components/NamedSlotTest.vue';
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';
export default {
  name: 'App',
  components: { NoSlotTest, SlotTest, NamedSlotTest },
  items: [
    { id: 'V', checked: true, label: 'Vue' },
    { id: 'A', checked: false, label: 'Angular' },
    { id: 'R', checked: false, label: 'React' },
    { id: 'S', checked: false, label: 'Svelte' },
  ],
};
</script>

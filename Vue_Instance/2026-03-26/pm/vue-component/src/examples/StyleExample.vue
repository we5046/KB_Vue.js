<template>
  <section class="page">
    <h1>단일 파일 컴포넌트 스타일</h1>
    <p class="guide"></p>

    <div class="grid">
      <GlobalBadge />
      <ModuleBadge />
      <ScopeBadge />
    </div>
  </section>
</template>
<script>
import GlobalBadge from '@/components/style/GlobalBadge.vue';
import ModuleBadge from '@/components/style/ModuleBadge.vue';
import ScopeBadge from '@/components/style/ScopeBadge.vue';

export default {
  name: 'StyleExample',
  components: { GlobalBadge, ModuleBadge, ScopeBadge },
  data() {
    return {};
  },
};
</script>
<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
}

.guide {
  color: #555;
  margin-bottom: 24px;
  line-height: 1.7;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
</style>

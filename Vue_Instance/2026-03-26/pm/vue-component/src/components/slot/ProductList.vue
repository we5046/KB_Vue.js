<template>
  <div class="">
    <div v-for="item in items" :key="item.id" class="product-row">
      <div class="badge-area">
        <slot name="badge" :item="item" :sale="item.sale">
          <span class="default-badge">
            {{ item.sale ? 'SALE' : 'NORMAL' }}
          </span>
        </slot>
      </div>

      <div class="content-area">
        <slot :item="item" :sale="item.sale">
          <strong>{{ item.name }}</strong>
          <p>{{ item.price.toLocaleString() }}원</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.product-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 14px;
  align-items: center;
  padding: 16px;
  border: 1px solid #e8edf4;
  border-radius: 14px;
  background: white;
}

.default-badge {
  display: inline-block;
  min-width: 80px;
  text-align: center;
  padding: 8px 10px;
  border-radius: 999px;
  background: #e9edf5;
  color: #666;
  font-size: 13px;
  font-weight: bold;
}

.content-area p {
  margin: 6px 0 0;
  color: #555;
}
</style>

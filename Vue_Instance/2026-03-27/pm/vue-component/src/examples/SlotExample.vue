<template>
  <section class="page">
    <h1>슬롯 예제</h1>

    <p class="guide">
      기본 슬롯, 명명된 슬롯, 범위 슬롯을 한 화면에서 확인할 수 있습니다.
    </p>

    <div class="card-grid">
      <SlotCard>
        <template v-slot:sunghoon>
          <h3>회원 정보 카드</h3>
        </template>

        <template v-slot:default>
          <p>이름: 김자바</p>
          <p>직무: 백엔드 개발자</p>
          <p>설명: 구조는 카드지만 내용은 부모가 자유롭게 넣습니다.</p>
        </template>

        <template v-slot:footer>
          <button class="primary-btn">상세 보기</button>
        </template>
      </SlotCard>

      <SlotCard>
        <template v-slot:sunghoon>
          <h3>상품 소개 카드</h3>
        </template>

        <template v-slot:default>
          <p>Vue 실전 강의</p>
          <p>컴포넌트 재사용과 UI 구성을 학습합니다.</p>
          <p>같은 카드 틀에 서로 다른 내용을 끼워 넣는 구조입니다.</p>
        </template>

        <template v-slot:footer>
          <button class="dark-btn">구매하기</button>
        </template>
      </SlotCard>
    </div>

    <h2 class="sub-title">명명된 슬롯으로 Layout 구성</h2>

    <LayoutFrame>
      <template v-slot:header>
        <h2>관리자 대시보드</h2>
      </template>

      <template v-slot:sidebar>
        <ul class="menu">
          <li>회원 관리</li>
          <li>주문 내역</li>
          <li>설정</li>
        </ul>
      </template>

      <template v-slot:default>
        <p>오늘의 방문자 수: 128명</p>
        <p>신규 주문: 23건</p>
        <p>레이아웃 구조를 통째로 컴포넌트화한 예제입니다.</p>
      </template>

      <template v-slot:footer>
        <strong>마지막 업데이트: 10분 전</strong>
      </template>
    </LayoutFrame>

    <h2 class="sub-title">범위 슬롯</h2>

    <ProductList :items="products">
      <template v-slot:badge="slotProps">
        <span class="badge" :class="{ active: slotProps.sale }">
          {{ slotProps.sale ? 'SALE' : 'NORMAL' }}
        </span>
      </template>

      <template v-slot:default="slotProps">
        <div class="product-box">
          <strong>{{ slotProps.item.name }}</strong>
          <p>{{ slotProps.item.price.toLocaleString() }}원</p>
        </div>
      </template>
    </ProductList>
  </section>
</template>

<script>
import SlotCard from '../components/slot/SlotCard.vue';
import LayoutFrame from '../components/slot/LayoutFrame.vue';
import ProductList from '../components/slot/ProductList.vue';

export default {
  name: 'SlotExample',
  components: {
    SlotCard,
    LayoutFrame,
    ProductList,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Vue 마스터 클래스', price: 45000, sale: true },
        { id: 2, name: 'Spring API 실습', price: 39000, sale: false },
        { id: 3, name: 'React UI 패턴', price: 42000, sale: true },
      ],
    };
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

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-bottom: 30px;
}

.primary-btn,
.dark-btn {
  border: none;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
}

.primary-btn {
  background: #2f80ed;
  color: white;
}

.dark-btn {
  background: #222;
  color: white;
}

.sub-title {
  margin: 34px 0 14px;
}

.menu {
  margin: 0;
  padding-left: 18px;
  line-height: 1.8;
}

.badge {
  min-width: 80px;
  text-align: center;
  padding: 8px 10px;
  border-radius: 999px;
  background: #e9edf5;
  color: #666;
  font-size: 13px;
  font-weight: bold;
}

.badge.active {
  background: #ffe0e0;
  color: #d63c3c;
}

.product-box p {
  margin: 6px 0 0;
  color: #555;
}
</style>

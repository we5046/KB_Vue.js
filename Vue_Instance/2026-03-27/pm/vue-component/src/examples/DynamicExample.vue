<template>
  <section class="page">
    <h1>동적 컴포넌트 예제</h1>

    <p class="guide">탭을 누를 때마다 다른 컴포넌트를 렌더링합니다.</p>

    <div class="tab-bar">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-btn"
        :class="{ active: currentTab === tab.id }"
        @click="changeTab(tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="content">
      <keep-alive include="QnaTab,ProfileTab">
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </section>
</template>

<script>
import NoticeTab from '../components/dynamic/NoticeTab.vue';
import QnaTab from '../components/dynamic/QnaTab.vue';
import ProfileTab from '../components/dynamic/ProfileTab.vue';

export default {
  name: 'DynamicExample',
  components: { NoticeTab, QnaTab, ProfileTab },
  data() {
    return {
      currentTab: 'NoticeTab',
      tabs: [
        { id: 'NoticeTab', label: '공지사항' },
        { id: 'QnaTab', label: 'Q&A' },
        { id: 'ProfileTab', label: '프로필' },
      ],
    }; //return
  }, // data
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>
<style></style>

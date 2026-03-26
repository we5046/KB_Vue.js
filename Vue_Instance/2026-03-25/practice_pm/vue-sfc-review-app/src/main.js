import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import mitt from 'mitt';

const app = createApp(App);

// mitt 라이브러리를 이용해 전역 이벤트 버스 생성
const emitter = mitt();

// 모든 컴포넌트에서 this.emitter 로 접근 가능
app.config.globalProperties.emitter = emitter;

app.mount('#app');

import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 개발할때만 적용됨
  server: {
    proxy: {
      // 어떤 URL을 지정해서 외부 통신할때 주소가 api로 시작된다면 바꿔주겠다.
      '/api': {
        // 실제 서버 URL
        target: 'http://localhost:3000',
        changeOrigin: true,
        // 정규 표현식 리터럴  [앞 뒤로 '/'를 활용해 묶어주는 방식]
        // /^ : 시작을 의미
        // \ : 종료?
        // 두번째 인자 : 제거하라
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

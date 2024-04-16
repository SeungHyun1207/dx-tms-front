import react from '@vitejs/plugin-react';
import { defineConfig , loadEnv } from 'vite';

// Vite 설정을 내보냅니다.
export default defineConfig(({ mode }) => {
  // 환경 변수를 로드합니다.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }; //환경 변수를 로드하여 process.env 객체에 추가하는 코드
  // loadEnv 함수는 Vite에서 제공하는 함수로, 환경 변수를 로드하는 데 사용됩니다.
  // mode 매개변수는 개발 모드인지 아니면 프로덕션 모드인지를 나타내는데, 이를 통해 적절한 환경 변수를 로드합니다.

  return {
    base: '',  // 프로젝트의 기본 경로
    plugins: [react()], // react사용을 위해 플러그인 추가
    server: {
      proxy: {
        '/api': { ///api로 시작하는 요청에 대한 프록시 설정을 정의
          target: process.env.VITE_LOCAL_API_SERVER,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/'),
          //이 부분은 요청 경로를 변경하는 함수를 정의합니다. 여기서는 /api로 시작하는 경로를 삭제하여 프록시된 요청의 경로를 재작성합니다.
          secure: false,  //보안 설정을 정의합니다. 여기서는 보안을 비활성화
          ws: true, // WebSocket 프록시를 활성화하는지 여부를 설정
        },
      },
    },
  };
});

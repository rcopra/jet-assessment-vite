import { resolve } from 'path'


export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://uk.api.just-eat.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
};

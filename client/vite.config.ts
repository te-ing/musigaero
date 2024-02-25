import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  envDir: '../',
  plugins: [react(), svgr()],
  build: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

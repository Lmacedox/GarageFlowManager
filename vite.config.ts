import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, InlineConfig, UserConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'jsdom',
  },
} as UserConfig & {
  test: InlineConfig;
});

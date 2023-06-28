import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import * as path from 'path';

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react(), EnvironmentPlugin('all')],
});

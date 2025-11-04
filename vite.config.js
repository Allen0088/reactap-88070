import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,       // usa un puerto diferente
    host: 'localhost' // o '0.0.0.0' si quieres acceso desde red
  }
});
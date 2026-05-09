import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/',
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: process.env.NODE_ENV !== 'production',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@sentry/')) {
              return 'vendor-sentry';
            }
            return 'vendor';
          }
          if (id.includes('src/Pages/dashboards/AdminDashboard')) {
            return 'admin';
          }
          if (id.includes('src/Pages/dashboards/PartnerDashboard')) {
            return 'partner';
          }
          if (id.includes('src/Pages/dashboards/ClientDashboard')) {
            return 'client';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1] || 'misc';
          if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return `assets/${ext}/[name]-[hash][extname]`;
        },
      },
    },
  },
  // Configuration pour le chargement des modules
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  // Configuration pour le chargement des fichiers de traduction
  define: {
    'process.env': {}
  }
});
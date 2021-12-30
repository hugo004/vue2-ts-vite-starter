import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import htmlPlugin from 'vite-plugin-index-html'

import path from 'path'
import { name } from './package.json'

// https:// vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // formats: ['esm'],
      entry: path.resolve(__dirname, 'src/main.ts'),
      name,
      fileName: () => 'main.ts',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  plugins: [
    createVuePlugin(),
    htmlPlugin({
      entry: './src/main.ts',
      preserveEntrySignatures: 'exports-only',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: require.resolve('vue/dist/vue.js'),
    },
  },
})

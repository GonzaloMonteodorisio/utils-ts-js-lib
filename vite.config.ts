/// <reference types="vitest" />

import path from 'path'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'utils-ts-js-lib',
      fileName: 'utils-ts-js-lib'
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, '/src')
    }
  },
  test: {
    globals: true
  },
  plugins: [dts({ outDir: 'dist' })]
})

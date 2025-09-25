// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile' // ⭐ 具名匯入（named import）

export default defineConfig(({ mode }) => {
	// 交作業用（可直接雙擊 index.html）
	if (mode === 'offline') {
		return {
			plugins: [react(), viteSingleFile()],
			base: './', // 相對路徑
			build: {
				assetsInlineLimit: 100000000, // 盡量把資產內嵌
				cssCodeSplit: false,          // 不切 CSS
				modulePreload: false,         // 關掉 modulepreload
				rollupOptions: {
					output: {
						manualChunks: undefined,   // 不分包
						inlineDynamicImports: true // 動態匯入也併回單檔
						// ★ 通常不必強制 format:'iife'，
						//   單檔＋不再外部 import 就不會踩 file:// CORS。
					}
				},
				target: 'es2015'
			}
		}
	}

	// 一般部署用（例如 GitHub Pages）
	return {
		plugins: [react()],
		base: './'
	}
})

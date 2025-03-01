import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    base: './',
    build: {
        outDir: 'dist-react',
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-icons', 'react-router-dom', 'react-hotkeys-hook'],
                    dexie: ['dexie', 'dexie-react-hooks']
                },
                chunkFileNames: 'assets/[name]-[hash].js',
            }
        }
    },
    server: {
        port: 5123,
        strictPort: true,
    },
})

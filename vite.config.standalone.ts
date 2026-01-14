import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Standalone configuration for offline usage
export default defineConfig({
    plugins: [
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    base: './',
    build: {
        outDir: 'dist-standalone',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
});

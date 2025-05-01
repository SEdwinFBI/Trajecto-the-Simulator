import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
  server:{
    host:"192.168.0.104"
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'), 
      '@components': path.resolve(__dirname, './app/components'),
      '@types': path.resolve(__dirname, './app/types'),
      '@store': path.resolve(__dirname, './app/store'),
      '@canvas': path.resolve(__dirname, './app/components/canvas'),
      '@layout': path.resolve(__dirname, './app/components/layout'),
      '@pages': path.resolve(__dirname, './app/components/pages'),
      '@containers': path.resolve(__dirname, './app/components/containers'),
      '@forms': path.resolve(__dirname, './app/components/forms'),
      '@requirements': path.resolve(__dirname, './app/components/requirements'),
    },
  },
});

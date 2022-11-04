import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  setupFile: 'histoire/histoire.setup.ts',
  plugins: [HstVue()],
  vite: {
    base: './',
    plugins: [vue()],
  },
});

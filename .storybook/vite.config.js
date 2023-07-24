import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { getComponentPaths } from './utils';
import { fileURLToPath, URL } from 'url';

const componentPaths = getComponentPaths();

export default defineConfig({
    plugins: [
        AutoImport({
            imports: ['vue', 'vue-router'],
            dirs: ['./stores', './composables/**', './utils/**', './.storybook/mocks'],
            vueTemplate: true,
            dts: false,
        }),
        Components({
            dirs: [],
            dts: false,
            resolvers: [
                (name) => {
                    const componentPath = componentPaths.get(name);

                    if (componentPath) {
                        return componentPath;
                    }
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('../', import.meta.url)),
            assets: fileURLToPath(new URL('../assets', import.meta.url)),
            public: fileURLToPath(new URL('../public', import.meta.url)),
        },
    },
    define: {
        'process.server': false,
    },
});

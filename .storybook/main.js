import 'dotenv/config';
import path from 'path';
import { loadConfigFromFile, mergeConfig } from 'vite';

export default {
    stories: ['../components/**/*.stories.@(js|ts)'],
    addons: ['@storybook/addon-essentials'],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    core: { disableTelemetry: true },

    async viteFinal(baseConfig) {
        const { config } = await loadConfigFromFile(
            { command: 'build', mode: 'dev' },
            path.resolve(__dirname, 'vite.config.js')
        );

        return mergeConfig(baseConfig, config);
    },
};

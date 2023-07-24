import { setup } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { createMemoryHistory, createRouter } from 'vue-router';

setup((app) => {
    const router = createRouter({
        history: createMemoryHistory(),
        routes: [
            {
                path: '/',
            },
        ],
    });
    app.use(router);

    app.component('NuxtLink', {
        props: ['to'],
        methods: {
            log() {
                action('NuxtLink target')(this.to);
            },
        },
        template: '<a @click="log()" style="cursor:pointer;"><slot /></a>',
    });

    app.component('ClientOnly', {
        template: '<slot />',
    });
});

const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            expanded: true,
            matchers: {
                date: /Date$/,
            },
        },
    },
};

export default preview;

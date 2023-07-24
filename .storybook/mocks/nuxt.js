import { action } from '@storybook/addon-actions';

export function useNuxtApp() {
    return {};
}

export function useRuntimeConfig() {
    return {
        public: {},
    };
}

export function defineNuxtPlugin(cb) {
    return (nuxtApp) => cb(nuxtApp);
}

export function navigateTo(...args) {
    action('navigateTo')(...args);
}

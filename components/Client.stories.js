import Test from './Client.client.vue';

export default {
    component: Test,
    render: (args) => ({
        components: { Test },

        setup() {
            return { args };
        },

        template: `<Test v-model="args.modelValue" />`,
    }),
    args: {
        modelValue: 'test',
    },
};

export const Default = {};

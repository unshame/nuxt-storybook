<script setup>
import { useVModel } from '@vueuse/core';

const props = defineProps({
    modelValue: String,
});

const modelValue = useVModel(props);

useNuxtApp();
useRuntimeConfig();
</script>

<template>
    <input v-model="modelValue" />
</template>

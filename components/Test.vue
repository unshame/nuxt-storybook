<script setup>
import { useVModel } from '@vueuse/core';

const props = defineProps({
    modelValue: String,
});

const modelValue = useVModel(props);

onMounted(() => {
    console.log('mounted');
});

useNuxtApp();
useRuntimeConfig();
</script>

<template>
    <input v-model="modelValue" />
</template>

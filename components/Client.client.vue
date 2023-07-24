<script setup>
import { useVModel } from '@vueuse/core';

const props = defineProps({
    modelValue: String,
});

const modelValue = useVModel(props);
</script>

<template>
    <input v-model="modelValue" />
    <LazyTest v-model="modelValue" />
</template>

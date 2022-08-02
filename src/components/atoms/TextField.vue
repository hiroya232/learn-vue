<template>
  <v-text-field
    v-model="text"
    :label="label"
    :type="type"
    :required="required"
    :rules="rules"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String,
    required: true,
    default: 'text',
  },
  required: {
    type: Boolean,
    required: true,
    default: false,
  },
  rules: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const text = ref<string>('');
const rules = ref<string[]>([]);

defineExpose({text})
</script>


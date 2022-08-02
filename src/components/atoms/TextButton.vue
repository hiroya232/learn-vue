<template>
  <v-btn
    :type="type"
    :color="color"
  >
    Login
  </v-btn>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: true,
    default: 'submit',
  },
  color: {
    type: String,
    required: false,
    default: 'primary',
  },
});
</script>

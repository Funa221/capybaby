<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref<number>(0);
</script>

<template>
  <h1>水豚豚小天地</h1>
  {{ count }}
</template>

<style scoped>
</style>

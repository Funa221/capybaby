<script setup lang="ts">
import { RouterView } from "vue-router";
import Mainheader from './header/Mainheader.vue';
import Mainfooter from './footer/Mainfooter.vue';

</script>

<template>
  <!-- 可任意更改背景顏色，也可放置圖片。 -->
  <div class="relative min-h-[100dvh] bg-slate-100">
    <Mainheader />
    <RouterView />
    <Mainfooter />
  </div>
</template>

<style scoped></style>

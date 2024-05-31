<script setup lang="ts">
import { ref } from 'vue';
const roundNum1 = ref<number>();

function pushbutton() {
    var randomNumber = Math.floor(Math.random() * 13) + 1;
    roundNum1.value = randomNumber;
};

</script>

<template>
    <!-- 內容寫裡面 -->
    <section class="flex justify-center items-center">
        <div class="">
            這是我想要塞的模板
        </div>
    </section>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';
const roundNum1 = ref<string>('這裡會隨機出現1~13數字');

function pushbutton() {
    var randomNumber = (Math.floor(Math.random() * 13) + 1).toString();
    roundNum1.value = randomNumber;
};

</script>

<template>
    <!-- 內容寫裡面 -->
    <section class="flex justify-center items-center p-3">
        <div class="">
            <div class="p-3">
                {{ roundNum1 }}
            </div>
            <button class="text-center p-3 rounded-[15px] bg-[#cab0b0] text-[#2e2a3f]" @click="pushbutton()">按我</button>
        </div>
    </section>
</template>

<style scoped></style>

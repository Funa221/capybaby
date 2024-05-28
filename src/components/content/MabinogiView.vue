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
    <section class="min-h-[80vh]">

        <div class="text-[22px] bg-gradient-to-r p-5 from-[#e9f2eb] to-[#c6e1cc]">

            <div class="p-5 text-center">
                <p>Mabinogi</p>
            </div>

            <div class="p-5">
                <div class="flex justify-center p-5">
                    <div class="">
                        點擊下面的按鈕，小水豚幫你挑1~13隨機數字！
                    </div>
                </div>

                <div class="flex justify-center p-5 text-[20px]">
                    <button v-on:click="pushbutton"
                        class="bg-[#EE0044] hover:bg-[#ffee00] p-2 rounded-[10px] text-[#fff] hover:text-[#000]">測試</button>

                </div>
                <div class="flex justify-center text-[20px]">
                    <div class="p-2">{{ roundNum1 }}</div>
                </div>
            </div>

        </div>


    </section>
</template>

<style scoped></style>

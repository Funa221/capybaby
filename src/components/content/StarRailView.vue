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
                <p>StarRail</p>
            </div>

        </div>

        <br>

        <div class="text-[22px] bg-gradient-to-r p-5 from-[#e9f2eb] to-[#c6e1cc]">

            <div class="p-5 text-center">
                <p>成就</p>
            </div>

        </div>

    </section>
</template>

<style scoped></style>

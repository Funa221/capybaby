<script setup lang="ts">
import { ref } from 'vue';

const offsetX = ref<number>(0);
const offsetY = ref<number>(0);

const handleMouseMove = (event: any) => {
    // 獲取視窗的中心點
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // 計算鼠標距離中心點的偏移量
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    // 根據偏移量設置背景移動比例
    const moveFactor = 0.05; // 調整比例影響視差程度
    offsetX.value = deltaX * moveFactor;
    offsetY.value = deltaY * moveFactor;
};

</script>

<template>

    <section @mousemove="handleMouseMove" class="relative min-h-[80vh] searchBg"
        :style="{ backgroundPosition: `${offsetX}px ${offsetY}px` }">
        <div
            class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[100%] w-[100%] bg-[#7474742d] backdrop-blur-md bg-opacity-75">
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[80%] w-[60%]">
            <div class="flex justify-center items-center h-full text-[38px] text-[#cecece]">
                <a href="/">
                    Welcome<br />
                </a>
            </div>
        </div>
    </section>

    <!-- 2. -->
    <!-- <section class="min-h-[77vh]">

        <div class="grid grid-cols-12 p-5">

            <div
                class="lg:col-span-6 col-span-12 p-5 text-[20px] text-center flex justify-center items-center text-[#123456]">
                <div class="">
                    <p>探索生活的無限可能，一杯咖啡、一本書，一刻美好的寧静。</p><br />
                    <p>與我們一同體驗這個美妙的世界吧，每個瞬間都值得珍惜。</p><br />
                    <div class="text-sm text-blue-500">#生活的美好 #無限可能</div>
                </div>

            </div>
            <div class="lg:col-span-6 col-span-12 p-5 text-center flex justify-center items-center">
                <div class="md:h-[80%] md:w-[80%] h-[90%] w-[90%]">
                    <img class="w-full h-full object-contain" src="@/assets/Image/zoo/IMG_7346.jpg" alt="">
                </div>
            </div>
        </div>

    </section> -->
</template>

<style scoped>
.searchBg {
    background: url('@/assets/Image/gif/vimage.gif') center/cover;
    padding: 1em 1em;
    transition: background-position 0.1s ease-out;
    /* 平滑背景位置過渡 */
}
</style>

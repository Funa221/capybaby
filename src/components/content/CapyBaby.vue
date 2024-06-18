<script setup lang="ts">
import router from '../../router';


const toPage = (page:any) =>{
    router.push({name:page});
};

</script>

<template>
    <!-- 內容寫裡面 -->
    <section class="min-h-[80vh]">

        <div class="grid grid-cols-12 text-[22px] bg-gradient-to-r p-5 from-[#e9f2eb] to-[#c6e1cc]">
            <div class="lg:col-span-6 col-span-12 p-5 text-center">
                <p>探索生活的無限可能，一杯咖啡、一本書，一刻美好的寧静。</p><br />
                <p>與我們一同體驗這個美妙的世界吧，每個瞬間都值得珍惜。</p><br />
                <div class="text-sm text-blue-500">#生活的美好 #無限可能</div>

                <div class="flex justify-center items-center text-[18px] mt-5 gap-x-6">
                    <!-- mabinogi -->
                    <button class="bg-gradient-to-t rounded-[15px] p-2 from-[#ffbe4e] hover:from-[#ffab1a] to-[#ffffff] hover:to-[#ffffff]" @click="toPage('mabinogi')" >Mabinogi</button>
                    <!-- StarRail -->
                    <!-- <button class="bg-gradient-to-t rounded-[15px] p-2 from-[#ffbe4e] hover:from-[#ffab1a] to-[#ffffff] hover:to-[#ffffff]" @click="toPage('starrail')" >StarRail</button> -->
                </div>
            </div>
            <div class="lg:col-span-6 col-span-12 p-5 text-center">
                <img src="@/assets/Image/zoo/IMG_7346.jpg" alt="">
            </div>
        </div>

    </section>
</template>

<style scoped></style>

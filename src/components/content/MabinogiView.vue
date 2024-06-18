<script setup lang="ts">
import * as Type from '../../assets/type.ts'
import MabinogiContent from '../contentmore/mabinogi/MabinogiContentView.vue'
import RoundNumView from '../contentmore/mabinogi/RoundNumView.vue'
import { useStore } from '../../stores/stores.ts'

import { reactive } from 'vue';

const SideItems: Type.SideItems[] = reactive([
    {
        name: "隨機數字",
        route: "",
    },
    {
        name: "轉蛋遊戲",
        route: "",
    },
    {
        name: "新手問題",
        route: "",
    },
]);

const SideBar = useStore();

// 點選左邊分頁時給數字進行顯示
const openSideBarNum = (index: number) => {
    SideBar.setSelectedPage(index);
    console.log(SideBar.SelectedPage);
};

</script>

<template>
    <!-- 內容寫裡面 -->
    <section class="min-h-[80vh]">

        <div class="text-[22px] md:grid grid-cols-12  p-5">
            <div class="md:grid md:col-span-2 md:col-start-2 flex justify-between md:justify-center items-center">
                <button
                    class="bg-[#ffffff] hover:bg-[#cbd1cb] hover:text-[#8a857e] text-[#403426] text-center rounded-[20px] p-3 m-3"
                    v-for="(item, index) in SideItems" :key="(SideItems as any)" @click="openSideBarNum(index + 1)">
                    {{ item.name }}
                </button>
            </div>
            <div class="grid col-span-12 md:col-span-6 bg-[#ffffff] text-center rounded-[20px]">
                <RoundNumView v-if="SideBar.SelectedPage == 1">
                </RoundNumView>
                <MabinogiContent v-if="SideBar.SelectedPage == 0">
                </MabinogiContent>
            </div>

        </div>


    </section>
</template>

<style scoped></style>

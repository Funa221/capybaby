<script setup lang="ts">
import * as Type from '../../assets/type.ts'
import MabinogiContent from '../contentmore/MabinogiContentView.vue'
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

        <div class="text-[22px] grid grid-cols-12  p-5">

            <div class="hidden md:grid col-span-3 bg-[#CCC] text-center rounded-[20px] p-3">
                <div class="text-[20px] text-md-[16px]" v-for="(item, index) in SideItems" :key="(SideItems as any)"
                    @click="openSideBarNum(index + 1)">
                    {{ item.name }}
                </div>
            </div>

            <div class="grid col-span-12 md:col-span-9 bg-[#ffffff] text-center rounded-[20px]">
                <MabinogiContent>
                </MabinogiContent>
            </div>

        </div>


    </section>
</template>

<style scoped></style>

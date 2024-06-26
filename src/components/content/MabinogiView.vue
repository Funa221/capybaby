<script setup lang="ts">
import * as Type from '../../assets/type.ts'
import MabinogiContent from '../contentmore/mabinogi/MabinogiContentView.vue'
import RoundNumView from '../contentmore/mabinogi/RoundNumView.vue'
import RoundItemsView from '../contentmore/mabinogi/RoundItemsView.vue'
import { useStore } from '../../stores/stores.ts'

import { reactive } from 'vue';

const SideItems: Type.SideItems[] = reactive([
    {
        name: "隨機數字",
        route: "",
    },
    {
        name: "轉蛋試抽",
        route: "",
    },
]);

const SideBar = useStore();

// 點選左邊分頁時給數字進行顯示
const openSideBarNum = (index: number) => {
    SideBar.setSelectedPage(index);
    // console.log(SideBar.SelectedPage);
};

</script>

<template>
    <!-- 內容寫裡面 -->
    <section class="min-h-[80vh]">

        <div class="text-[22px] md:grid grid-cols-12  p-5">

            <!-- 左內容顯示 -->
            <div class="md:grid md:col-span-2 md:col-start-2 md:row-start-1 flex justify-between md:justify-center items-center md:h-[200px]">
                <button
                    class="bg-[#ffffff] hover:bg-[#cbd1cb] hover:text-[#8a857e] text-[#403426] text-center rounded-[20px] p-3 m-3 text-[20px]"
                    v-for="(item, index) in SideItems" :key="(SideItems as any)" @click="openSideBarNum(index + 1)">
                    {{ item.name }}
                </button>
            </div>

            <!-- 右邊內容顯示 -->
            <div class="grid col-span-12 md:col-span-6 bg-[#ffffff] text-center rounded-[20px]">
                <RoundNumView v-if="SideBar.SelectedPage == 1">
                </RoundNumView>
                <RoundItemsView v-if="SideBar.SelectedPage == 2">
                </RoundItemsView>
                <MabinogiContent v-if="SideBar.SelectedPage == 0">
                </MabinogiContent>
            </div>

        </div>


    </section>
</template>

<style scoped></style>

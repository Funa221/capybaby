<script setup lang="ts">
import { reactive } from 'vue';
const openMenu = () => {
    console.log('123');
};


export interface MenuItem {
    name: string;
    route: string;
}

const MenuItems: MenuItem[] = reactive([
    {
        name: "Home",
        route: "",
    },
    {
        name: "About",
        route: "",
    },
    {
        name: "Login",
        route: "",
    },
]);
</script>

<template>
    <header class="lg:h-[80px] h-[50px] w-full border-y text-[#787878] grid grid-cols-12">
        <!-- logo -->
        <div class="grid col-span-4 justify-center items-center">
            <a class="flex justify-center items-center hover:text-[#125627] p-3">
                QQ
            </a>
        </div>

        <!-- nav -->
        <div class="grid col-span-6 col-start-6 justify-end items-center">
            <button class="lg:hidden flex justify-center items-center hover:text-[#125627] p-3" @click="openMenu()">
                三
            </button>
            <ul class="hidden lg:flex gap-x-6">
                <li class="hover:text-[#125627]" v-for="Items in MenuItems" :key="(Items as any)">{{ Items.name }}</li>
            </ul>
        </div>
    </header>
</template>

<style scoped></style>

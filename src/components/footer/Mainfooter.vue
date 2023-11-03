<script setup lang="ts">
import { reactive } from 'vue';

export interface MenuItem {
    name: string;
    route: string;
}

const MenuItems: MenuItem[] = reactive([
    {
        name: "FB",
        route: "",
    },
    {
        name: "LINE",
        route: "",
    },
    {
        name: "IG",
        route: "",
    },
]);
</script>

<template>
    <footer class="h-[80px] w-full border-y text-[#787878] flex justify-center items-center">

        <!-- nav -->
        <div class="flex justify-center items-center">
            <ul class="flex gap-x-6">
                <li class="hover:text-[#125627]" v-for="Items in MenuItems" :key="(Items as any)">{{ Items.name }}</li>
            </ul>
        </div>

    </footer>
</template>

<style scoped></style>

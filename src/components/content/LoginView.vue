<script setup lang="ts">
import { ref } from 'vue';
const username = ref<string>('');
const password = ref<string>('');

const loginSubmit = ()=>{
    console.log('username',username.value);
    console.log('password',password.value);
};

</script>

<template>
    <!-- 內容寫裡面 -->
    <section class="min-h-[77vh] flex justify-center items-center">

        <div class="rounded-[15px] bg-[#c9d3da] text-[#303030] p-5 m-5">
            <!--  -->
            <div class="flex justify-center p-3">
                <img class="h-1/2 w-1/2" src="../../assets/Image/zoo/吱吱.gif" alt="">
            </div>
            <!--  -->
            <form @submit.prevent="loginSubmit">
                <div class="text-[22px]">
                    <div class="grid grid-cols-12 p-3">
                        <label class="col-span-2 col-start-2 text-center" for="username">帳號</label>
                        <input class="col-span-7" type="text" id="username" v-model="username" required>
                    </div>
                    <div class="grid grid-cols-12 p-3">
                        <label class="col-span-2 col-start-2 text-center" for="password">密碼</label>
                        <input class="col-span-7" type="password" id="password" v-model="password" required>
                    </div>
                </div>

                <div class="flex justify-center items-center p-3 ">
                    <button class="p-2 text-center rounded-[10px] bg-[#f5f5f5]" type="submit">
                        登入
                    </button>
                </div>
            </form>
        </div>

    </section>
</template>

<style scoped></style>

<script setup lang="ts">
import { computed, ref } from 'vue';
// import idolprizes from '@/assets/JSON/idol.json';
import blueumiprizes from '@/assets/JSON/blueumi.json';

const selectedPrize = ref<any>('這裡會出現神奇的物品');
const Probability = ref<number>();//機率
const Itemslevel = ref<string>('');//獎品等級
const count = ref<number>(0);//點擊次數
const prizeHistory = ref<any>([]);//陣列，點擊紀錄

// 抽獎設定
const draw = () => {
  let cumulativeProbability = 0;
  const random = Math.random() * 100;//因為機率是百分比形式
  for (let prize of blueumiprizes) {
    cumulativeProbability += prize.probability;
    if (random < cumulativeProbability) {
      selectedPrize.value = prize.name;
      Probability.value = prize.probability;
      Itemslevel.value = prize.level;
      prizeHistory.value.unshift({
        level: prize.level,
        name: prize.name,
        probability: prize.probability
      });
      // 將抽中的獎品添加到歷史記錄中,
      // .push加在後面,則.unshift是在前面增加
      break;
    }
  }
  count.value++; //點擊次數增加
  console.log(selectedPrize.value, Probability.value); //log紀錄
};


const SlotteryCount = computed(() => {
  return prizeHistory.value.filter((prize: { level: string; }) => prize.level === 'S').length;
});



// 抽獎內容機率加總
const calculateTotalProbability = () => {
  let totalProbability = 0;
  for (let prize of blueumiprizes) {
    totalProbability += prize.probability;
  }
  return totalProbability;
};
const totalProbability = calculateTotalProbability();
console.log(`總機率: ${totalProbability}`);

</script>

<style>
@keyframes rainbow-flicker {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.rainbow {
  background: linear-gradient(270deg, red, orange, yellow, green, blue, indigo, violet);
  background-size: 400% 400%;
  background-clip: text;
  color: transparent;
  animation: rainbow-flicker 5s ease infinite;
}
</style>

<template>
  <!-- 內容寫裡面 -->
  <section class="flex justify-center items-center p-3 ">
    <div class="w-[100%]">
      <div class="p-3">
        <span :class="Itemslevel === 'S' ? 'rainbow' : ''">{{ selectedPrize }}</span>
      </div>

      <button class="text-center p-3 rounded-[15px] bg-[#cab0b0] text-[#2e2a3f]" @click="draw()">按我</button>

      <div class="p-3">
        點擊次數：{{ count }}
      </div>

      <hr>

      <!-- 歷史紀錄 -->
      <div class="p-3 text-[16px] md:text-[20px]">

        <table class="table-auto w-full border-collapse border-[#123456]">


          <caption class="caption-top w-full p-2">
            S獎：{{ SlotteryCount }}
          </caption>

          <thead>
            <tr class="text-[#222222]">
              <th class="border border-slate-300">等級</th>
              <th class="border border-slate-300">名稱</th>
              <th class="border border-slate-300">機率</th>
            </tr>
          </thead>

          <!--  -->
          <tr class=" text-[#555555]" v-for="(prizeItems, index) in prizeHistory" :key="index">
            <!-- 獎品等級 -->
            <td :class="prizeItems.level === 'S' ? 'rainbow' : ''" class="border border-slate-300  p-1">{{
          prizeItems.level
        }}</td>
            <!-- 獎品名稱 -->
            <td :class="prizeItems.level === 'S' ? 'rainbow' : ''" class="border border-slate-300">{{ prizeItems.name }}
            </td>
            <!-- 獎品機率 -->
            <td class="border border-slate-300">{{ prizeItems.probability }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

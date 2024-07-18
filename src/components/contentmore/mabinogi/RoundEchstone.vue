<script setup lang="ts">
import { ref } from 'vue';

// 動態導入所有 JSON 檔案
const jsonModules = import.meta.glob('../../../assets/JSON/*.json');

const selectedPrize = ref<any>('先點圖片！再點按我！');
const Probability = ref<number>();//機率
const Itemslevel = ref<string>('');//獎品等級
const count = ref<number>(0);//點擊次數
const prizeHistory = ref<any>([]);//陣列，點擊紀錄
const currentPrizes = ref<{ level: string; name: string; probability: number }[]>([]);
const totalProbability = ref<number>();


// 動態加載 JSON 檔案
const loadPrizes = async (fileName: any) => {
  const path = `../../../assets/JSON/${fileName}.json`;
  if (jsonModules[path]) {
    try {
      const module = await jsonModules[path]() as { default: { level: string; name: string; probability: number }[] };
      const prizes = module.default;
      return prizes;
    } catch (error) {
      console.error(`Error loading JSON file ${fileName}.json:`, error);
      return [];
    }
  } else {
    console.error(`JSON file ${fileName}.json not found`);
    return [];
  }
};

// 根據用戶選擇動態設置當前獎品列表
const selectdraw = async (selection: any) => {
  currentPrizes.value = await loadPrizes(selection);

  selectedPrize.value = selection;

  // 抽獎內容機率加總
  const calculateTotalProbability = () => {
    let totalProbability = 0;
    for (let prize of currentPrizes.value) {
      totalProbability += prize.probability;
    }
    return totalProbability;
  };

  // 總機率
  totalProbability.value = calculateTotalProbability();
  console.log(`總機率: ${totalProbability.value.toFixed(4)}`);

};

// 抽獎設定
const draw = () => {
  let cumulativeProbability = 0;
  const random = Math.random() * 100;//因為機率是百分比形式
  for (let prize of currentPrizes.value) {
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
};

// 清空紀錄
const clearlog = () => {
  prizeHistory.value.length = 0;
  count.value = 0;
  selectedPrize.value = '清除記錄了！';
};


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
  <!-- 選擇 -->
  <section class="flex flex-wrap justify-center gap-2 mt-5">
    <div class="w-1/4 lg:w-1/6 flex justify-center items-center rounded-[10px] hover:bg-[#f4f4f4]"
      @click="selectdraw('藍色回音石')">
      <img class="w-[50px] h-[50px]" src="@/assets/image/echostone/藍色回音石.png" alt="">
    </div>
  </section>


  <!-- 抽獎 -->
  <section class="flex justify-center items-center p-3 ">
    <div class="w-[100%]">
      <div class="p-3 text-[16px] lg:text-[20px]">
        <span :class="Itemslevel === 'S' ? 'rainbow font-bold' : ''">{{ selectedPrize }}</span>
      </div>

      <div class="flex justify-center gap-4">
        <button
          class="text-center text-[18px] lg:text-[20px] p-1 w-[20%] lg:w-[13%] rounded-[13px] bg-[#f3c0c0] hover:bg-[#dab8b8] shadow-[4px_4px_1px_-1px_rgba(0,0,0,1)] text-[#2e2a3f]"
          @click="draw()">按我</button>

      </div>

      <div class="p-3 text-[16px]">
        點擊次數：{{ count }}
      </div>

      <hr>

      <!-- 歷史紀錄 -->
      <div class="p-3 md:text-[16px] text-[14px]">

        <!-- Object.entries(totalProbabilityByLevel) -->
        <span class="md:text-[14px] text-[12px]  text-[#898989]">
          {{ totalProbability }}
        </span>

        <div class="flex justify-evenly items-center">
          <button
            class="p-1 bg-[#a5c7e9] hover:bg-[#9cb3cb] shadow-[4px_4px_1px_-1px_rgba(0,0,0,1)] rounded-[10px] text-[16px] text-[#2e2a3f] w-[17%] lg:w-[13%]"
            @click="clearlog()">清除</button>
        </div>

        <table class="table-auto w-full border-collapse border-[#123456] mt-2">

          <thead>
            <tr class="text-[#222222]">
              <th class="border border-slate-300 w-1/6">等級</th>
              <th class="border border-slate-300 w-1/2">名稱</th>
              <th class="border border-slate-300 w-1/6">機率</th>
            </tr>
          </thead>

          <!--  -->
          <tr class=" text-[#555555]" v-for="(prizeItems, index) in prizeHistory" :key="index">
            <!-- 獎品等級 -->
            <td :class="{
        'rainbow': prizeItems.level === 'S',
        'text-[#ea67f4]': prizeItems.level === 'A',
        'text-[#54b16e]': prizeItems.level === 'B',
        'text-[#867d7d]': prizeItems.level === 'C'
      }" class="border border-slate-300  p-1">{{
        prizeItems.level
      }}</td>
            <!-- 獎品名稱 -->
            <td :class="{
          'rainbow font-bold': prizeItems.level === 'S',
          'text-[#ea67f4]': prizeItems.level === 'A',
          'text-[#54b16e]': prizeItems.level === 'B',
          'text-[#867d7d]': prizeItems.level === 'C'
        }" class="border border-slate-300">{{ prizeItems.name }}
            </td>
            <!-- 獎品機率 -->
            <td class="border border-slate-300">{{ prizeItems.probability.toFixed(2) }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<style scoped></style>

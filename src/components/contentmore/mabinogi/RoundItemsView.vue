<script setup lang="ts">
import { ref } from 'vue';
import prizes from '../../../assets/JSON/idol.json';
    
    const selectedPrize = ref<any>('這裡會出現神奇的物品');
    const Probability = ref<number>();//機率
    const count = ref<number>(0);//點擊次數

    const draw = () => {
      let cumulativeProbability = 0;
      const random = Math.random()*100;//因為機率是百分比形式
      for (let prize of prizes) {
        cumulativeProbability += prize.probability;
        if (random < cumulativeProbability) {
          selectedPrize.value = prize.name;
          Probability.value = prize.probability;
          break;
        }
      }
      count.value++;
      console.log(selectedPrize.value,Probability.value);
      
    };

</script>

<template>
    <!-- 內容寫裡面 -->
    <section class="flex justify-center items-center p-3">
        <div class="">
            <div class="p-3">
                {{ selectedPrize }}
            </div>
            
            <button class="text-center p-3 rounded-[15px] bg-[#cab0b0] text-[#2e2a3f]" @click="draw()">按我</button>

            <div class="">
                點擊次數：{{ count }}
            </div>
        </div>
    </section>
</template>

<style scoped></style>

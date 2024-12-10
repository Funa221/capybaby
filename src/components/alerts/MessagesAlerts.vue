<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const store = useStore();
const isMessages = computed(() => store.state.messagesAlert.isMessages);
const Tips = computed(() => store.state.messagesAlert.tips);
const messageTitle = computed(() => store.state.messagesAlert.messageTitle);

const closeMessage = () => {
  store.dispatch('messagesAlert/hideMessages');
}

</script>

<template>
  <div class="MessagesAlerts">

    <!-- modal -->
    <TransitionRoot appear :show="isMessages">
      <Dialog @close="closeMessage" class="relative z-50">
        <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-100 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25"></div>
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full min-w-[80%] lg:min-w-[400px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                <!-- title -->
                <DialogTitle as="h3" class="text-lg text-center font-medium leading-6 text-gray-900 p-2 mb-2">
                  <h3 class="text-xl font-bold">{{ messageTitle }}</h3>
                </DialogTitle>

                <!-- body -->
                <div class="text-center text-md text-gray-500 p-4 mb-6">
                  <p v-for="tip in Tips" :key="tip.id" v-html="tip.msg"></p>
                </div>

                <!-- footer -->
                <div class="flex justify-center mb-2">
                  <button type="button" @click="closeMessage"
                    class="p-2 bg-gray-400 hover:bg-gray-500 text-white rounded">
                    關閉
                  </button>
                </div>

              </DialogPanel>
            </TransitionChild>
          </div>
        </div>

      </Dialog>
    </TransitionRoot>

    <!-- <transition name="list">
      <div
        class="p-4 w-[80%] lg:w-[35%] text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">

        <div class="flex items-center justify-center">
          <h3 class="text-xl font-bold">{{ messageTitle }}</h3>
        </div>

        <div class="mt-2 text-center text-md text-gray-500 p-4">
          <p v-for="tip in Tips" :key="tip.id" v-html="tip.msg"></p>
        </div>

        <div class="flex justify-center">
          <button type="button" @click="closeMessage" class="mt-4 p-2 bg-gray-400 hover:bg-gray-500 text-white rounded">
            關閉
          </button>
        </div>
      </div>
    </transition> -->

  </div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

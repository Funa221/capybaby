// store/successAlert.js
import { ref, watchEffect } from 'vue';

export default {
  namespaced: true,
  state: () => ({
    count: 0,
    tips: ref([]),
    isPopping: false,
  }),
  mutations: {
    ADD_Success_ALERT(state, msg) {
      state.count++;
      const tip = {
        msg,
        id: state.count + 'SuccessTip',
      };
      state.tips.unshift(tip);
    },
    REMOVE_Success_ALERT(state) {
      if (!state.isPopping && state.tips.length > 0) {
        state.isPopping = true;
        state.tips.pop();
        state.isPopping = false;
      }
    },
  },
  actions: {
    addSuccessAlert({ commit, state }, msg) {
      commit('ADD_Success_ALERT', msg);

      setTimeout(() => {
        commit('REMOVE_Success_ALERT');
      }, 2000);
    },
  },
  getters: {
    tips(state) {
      return state.tips;
    },
  },
};

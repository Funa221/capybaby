// store/errorAlert.js
import { ref, watchEffect } from 'vue';

export default {
  namespaced: true,
  state: () => ({
    count: 0,
    tips: ref([]),
    isPopping: false,
  }),
  mutations: {
    ADD_ERROR_ALERT(state, msg) {
      state.count++;
      const tip = {
        msg,
        id: state.count + 'ErrorTip',
      };
      state.tips.unshift(tip);
    },
    REMOVE_ERROR_ALERT(state) {
      if (!state.isPopping && state.tips.length > 0) {
        state.isPopping = true;
        state.tips.pop();
        state.isPopping = false;
      }
    },
  },
  actions: {
    addErrorAlert({ commit, state }, msg) {
      commit('ADD_ERROR_ALERT', msg);

      setTimeout(() => {
        commit('REMOVE_ERROR_ALERT');
      }, 2000);
    },
  },
  getters: {
    tips(state) {
      return state.tips;
    },
  },
};

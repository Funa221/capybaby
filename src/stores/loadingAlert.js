export default {
  namespaced: true,
  state: () => ({
    isLoading: false, // 控制讀取狀態
    count: 0,         // 提示的計數器
    tips: [],         // 儲存讀取提示的陣列
  }),
  mutations: {
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    ADD_LOADING_ALERT(state, msg) {
      state.count++;
      const tip = {
        msg,
        id: `${state.count}LoadingTip`,
      };
      state.tips.push(tip);
    },
    REMOVE_LOADING_ALERT(state) {
      state.tips.shift(); // 刪除最早的提示
    },
  },
  actions: {
    showLoading({ commit }, msg) {
      commit('SET_LOADING', true); // 啟用讀取狀態
      if (msg) {
        commit('ADD_LOADING_ALERT', msg);
      }
    },
    hideLoading({ commit }) {
      commit('SET_LOADING', false); // 關閉讀取狀態
      commit('REMOVE_LOADING_ALERT'); // 移除提示
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    tips: (state) => state.tips,
  },
};

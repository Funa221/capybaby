export default {
  namespaced: true,
  state: () => ({
    isMessages: false, // 控制讀取狀態
    count: 0,         // 提示的計數器
    tips: [],         // 儲存讀取提示的陣列
    messageTitle: '', // 標題
  }),
  mutations: {
    SET_MESSAGES(state, { status, title }) {
      state.isMessages = status;
      state.messageTitle = title || ''; // 若沒有傳入標題則使用預設
    },
    ADD_MESSAGES_ALERT(state, msg) {
      state.count++;
      const tip = {
        msg,
        id: state.count + 'MessagesTip',
      };
      state.tips.unshift(tip);
    },
    REMOVE_MESSAGES_ALERT(state) {
      state.tips.shift(); // 刪除最早的提示
    },
  },
  actions: {
    showMessages({ commit }, payload) {
      const msg = typeof payload === 'string' ? payload : payload.msg;
      const title = typeof payload === 'string' ? state.messageTitle : payload.title;
      commit('SET_MESSAGES', { status: true, title });
      if (msg) {
        commit('ADD_MESSAGES_ALERT', msg);
      }
    },
    hideMessages({ commit }) {
      commit('SET_MESSAGES', { status: false, title: '' });
      commit('REMOVE_MESSAGES_ALERT');
    },
  },
  getters: {
    isMessages: (state) => state.isMessages,
    tips: (state) => state.tips,
    messageTitle: (state) => state.messageTitle,
  },
};

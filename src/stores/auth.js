// store/modules/auth.js
import { ref } from 'vue';

export default {
  namespaced: true,
  state: () => ({
    user: 0,
    token: null,
  }),
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    CLEAR_AUTH(state) {
      state.user = 0;
      state.token = null;
    },
  },
  actions: {
    login({ commit, state }, payload) {
      commit('SET_USER', payload.user);
      if (payload.token) {
        commit('SET_TOKEN', payload.token);
      } else if (!state.token) {
        commit('SET_TOKEN', payload.token);
      }
    },
    logout({ commit }) {
      commit('CLEAR_AUTH');
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token; // 檢查是否有 Token
    },
    user(state) {
      return state.user;
    },
  },
};

import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import errorAlert from './errorAlert';
import successAlert from './successAlert';
import loadingAlert from './loadingAlert';
import messagesAlert from './messagesAlert';
import auth from './auth';
// import router from '@/router'
// import swal from 'sweetalert2'

export default createStore({
  state: {
    adminLang: 'tw',
    showNav: true,
    ipIsAdmin: false,
  },
  getters: {
  },
  mutations: {
    toggleNav(state, show) {
      state.showNav = show;
    },
  },
  actions: {
  },
  modules: {
    messagesAlert,
    loadingAlert,
    errorAlert,
    successAlert,
    auth,
  },
  // 把vuex的資料存在localstorage
  plugins: [createPersistedState({
    key: 'gwls',
    paths: ['adminLang', 'showNav', 'auth.user', 'auth.token']
  })]
})

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import app from './modules/app';
import permission from './modules/permission';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    permission,
    user,
  },
  getters,
});
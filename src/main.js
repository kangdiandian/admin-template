import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import 'normalize.css/normalize';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { sync } from 'vuex-router-sync';

import '@/style/index';

import '@/permission';

Vue.use(Element, {
  size: 'medium',
});

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

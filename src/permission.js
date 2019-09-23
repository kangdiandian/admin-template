import router from '@/router';
import store from '@/store';

router.beforeEach((to, from, next) => {
  if (!store.getters.isAddDynamicRouters) {
    store.dispatch('generateRoutes');
    store.dispatch('initConfig');
    router.addRoutes(store.getters.addRouters);
    next('/login');
  }
  next();
});

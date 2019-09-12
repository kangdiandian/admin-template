import { asyncRouterMap } from '@/router';

function filterAsyncRouter(routers) {
  return routers;
}

const permission = {
  state: {
    isAddDynamicRouters: false,
    menus: [],
    addRouters: [],
  },
  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    },
    SET_ROUTES: (state, routes) => {
      state.addRouters = routes;
      state.isAddDynamicRouters = true;
    },
  },
  actions: {
    generateRoutes({ commit }) {
      // return new Promise((resolve, reject) => {
      //   const menus = filterAsyncRouter(asyncRouterMap);
      //   commit('SET_MENUS', menus);
      //   resolve();
      //   reject();
      // });
      const routers = filterAsyncRouter(asyncRouterMap);
      commit('SET_MENUS', routers);
      commit('SET_ROUTES', routers);
    },
  },
};

export default permission;

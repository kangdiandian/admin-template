import cookie from '@/utils/cookie';

const app = {
  state: {
    sidebar: {
      opened: cookie.get('sidebarStatus')
        ? !!+cookie.get('sidebarStatus')
        : true,
      withoutAnimation: false,
    },
  },
  mutations: {
    TOGGLE_SILDBAR: state => {
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
      if (state.sidebar.opened) {
        cookie.set('sidebarStatus', 1);
      } else {
        cookie.set('sidebarStatus', 0);
      }
    },
  },
  actions: {
    // 切换silderBar
    toggleSideBar({ commit }) {
      commit('TOGGLE_SILDBAR');
    },
  },
};

export default app;

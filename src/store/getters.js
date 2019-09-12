const getters = {
  sidebar: state => state.app.sidebar,
  isAddDynamicRouters: state => state.permission.isAddDynamicRouters,
  menus: state => state.permission.menus,
  addRouters: state => state.permission.addRouters,
};
export default getters;

import api from '@/api';

const login = {
  state: {},
  mutation: {},
  actions: {
    Login({ commit }, query) {
      api.login(
        {},
        res => {
          console.log(res);
        },
        err => {}
      );
    },
  },
};

export default login;

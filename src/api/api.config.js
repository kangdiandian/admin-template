import { clone } from '@/utils';
let header = {};
let params = {};

export const modelApis = {
  login: 'POST /admin/user/login',
  initConfig: '/admin/common/initconfig',
};

export const commonParams = {
  init(data) {
    params = clone(data);
  },
  set(obj) {
    params = Object.assign(params, obj);
  },
  get(key) {
    return key ? clone(params[key]) : params;
  },
};

export const headers = {
  init(data) {
    header = clone(data);
  },
  get(key) {
    return key ? clone(header[key]) : clone(header);
  },
  set(obj) {
    header = Object.assign(header, obj);
  },
};

// const apiConfig = {
//   modelApis,
//   commonParams,
//   headers,
// };

// export default apiConfig;

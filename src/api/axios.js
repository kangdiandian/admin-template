import { modelApis, commonParams, headers } from '@/api/api.config.js';
import request from '@/api/request/axios';
import { clone } from '@/utils';
import env from '@/config/env';

const httpsRegexp = /^https?/i;

const apiList = Object.keys(modelApis).reduce((api, key) => {
  const val = modelApis[key];
  const [url, methodType = 'GET'] = val.split(/\s+/).reverse();
  const method = methodType.toUpperCase(methodType);
  api[key] = function postRequest(params, success, fail) {
    const originUrl = httpsRegexp.test(url)
      ? url
      : `${env.scheme}//${env.apiBaseUrl}${url}`;
    const temp = clone(Object.assign({}, commonParams.get(), params));
    const header = headers.get();
    return request({
      url: originUrl,
      method,
      options: temp,
      success,
      fail,
      header,
    });
  };
  return api;
}, {});

export default apiList;

import axios from 'axios';
import { clone } from '@/utils';
import qs from 'qs';
// import { compact } from '@/utils';

function noop() {
  console.log('异常流程，不应该进入这里');
}

function checkStatus(res) {
  const { status } = res;
  if (status >= 200 && status < 300) {
    return res;
  }
}

const defaultOptions = {
  url: '',
  method: 'get',
  baseURL: '',
  headers: {
    // 'Content-Type': 'application/json; charset=utf-8',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  params: {},
  data: {},
  responseType: 'json',
  withCredentials: true,
  timeout: 30000, // 请求超时时间
};

export default function request({
  url,
  method,
  options = {},
  success = noop,
  fail = noop,
  header,
}) {
  const opts = clone(defaultOptions);
  opts.url = url;
  opts.headers = {
    ...opts.headers,
    ...header,
  };
  if (method === 'GET') {
    opts.method = 'get';
    opts.params = options;
    // 移动端可过滤参数中的无效参数
    // opts.params = compact(options);
  } else {
    opts.method = 'post';
    //post请求中，如果直接传json。则content-type 为json，有些数据后端没办法直接获取
    // 将json字符串化之后，将content-type 变为application/x-www-form-urlencoded，表单数据一般后端框架都能处理
    // let query = new URLSearchParams();
    // for (let key in options) {
    //   query.append(key, options[key]);
    // }
    // opts.data = query;
    opts.data = qs.stringify(options);
  }

  function log(res) {
    console.log(`api: ${method} ${res.status} ${url}`);
    if (!res.errno) res.errno = res.statusCode;
    if (!res.errmsg) res.errmsg = res.message;
    return res;
  }

  const successCallBack = data => {
    if (typeof success === 'function') {
      success(data);
    }
  };

  const errorCallBack = err => {
    if (typeof fail === 'function' && fail(err)) {
      return;
    }
    // 此处可统一处理一些错误码，如用户未登陆等等
    // if (err.errno === 180001) {
    //   do something
    // }
  };

  axios(opts)
    .then(log)
    .then(checkStatus)
    .then(res => {
      const data = res.data || res || {};
      const errno = data.errno;
      const errmsg = data.errmsg;
      if (errno === 0) {
        successCallBack({
          errno,
          errmsg,
          ...res.data,
        });
      } else {
        errorCallBack({
          errno,
          errmsg,
        });
      }
    })
    .catch(err => {
      errorCallBack({
        errno: 400,
        errmsg: err.message,
      });
    });
}

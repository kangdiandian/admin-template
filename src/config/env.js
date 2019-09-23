const { location } = window;

export const ENV = {
  prod: {
    stage: 'prod',
    baseUrl: 'admin.doweidu.com',
    apiBaseUrl: 'm.api.doweidu.com',
  },
  beta: {
    stage: 'beta',
    baseUrl: 'admin.beta.doweidu.com',
    apiBaseUrl: 'm.betaapi.doweidu.com',
  },
  dev: {
    stage: 'dev',
    baseUrl: 'admin.dev.doweidu.com',
    apiBaseUrl: 'm.devapi.doweidu.com',
  },
  local: {
    stage: 'local',
    baseUrl: location.host,
    apiBaseUrl: 'm.devapi.doweidu.com',
  },
};

let tempApi = {};
for (let key in ENV) {
  const api = ENV[key].apiBaseUrl;
  if (!tempApi[api]) {
    tempApi[api] = key;
  }
}

const baseEnv = {
  site: {
    title: 'admin',
    desc: '后台管理系统',
  },
  baseUrl: location.host,
  host: location.host,
  port: location.port,
  scheme: location.protocol,
  stage: 'prod', // 发行版本
  apiEnv: 'prod', // api环境
};

const regLocal = /^(localhost|127\.)/i;
const regLocalIp = /^(10\.|192\.)/i;

function createEnv() {
  const { host } = location;
  let current = { ...baseEnv, ...ENV.prod };
  if (host === ENV['prod'].baseUrl) {
    return current;
  }
  if (host === ENV['beta'].baseUrl) {
    current = { ...baseEnv, ...ENV.beta };
  }
  if (host === ENV['dev'].baseUrl) {
    current = { ...baseEnv, ...ENV.dev };
  }

  const isLocal = host.match(regLocal);
  const isLocalIp = host.match(regLocalIp);
  if (isLocal || isLocalIp) {
    current = { ...baseEnv, ...ENV.local };
  }

  Object.assign(current, {
    apiEnv: tempApi[current.apiBaseUrl] || 'custom',
  });

  return current;
}

const currentEnv = createEnv();

export default currentEnv;

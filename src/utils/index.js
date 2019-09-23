export function clone(obj = '') {
  return obj ? JSON.parse(JSON.stringify(obj)) : obj;
}

// 过滤无效参数
export function compact(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'undefined') delete obj[key];
    if (typeof obj[key] !== 'number' && obj[key] == '') delete obj[key];
  }
  return obj;
}

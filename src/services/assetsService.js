const Cache = {};

const get = path => fetch(path).then(res => res.text());
const toCache = location => fn => (...args) => {
  const cacheAddress = location + JSON.stringify(args);
  return Cache[cacheAddress]
    ? Promise.resolve(Cache[cacheAddress])
    : fn(...args).then((res) => {
      Cache[cacheAddress] = res;
      return res;
    });
};

export default {
  get: toCache('assets')(get),
};

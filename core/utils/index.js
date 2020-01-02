const flatData = (data) => data.reduce((arr, item) => arr.concat(item), []);

const isPosition = (position) => /\d+-\d+/.test(position);

const switchEach = (arr) => [arr[1], arr[0]];

const type = {
  isFunction: (fn) => fn && typeof fn === 'function',
  isArray: (arr) => arr instanceof Array,
  isPositiveNumber: (num) => num > 0 && typeof num === 'number' && String(num).indexOf('.') < 0,
  isElement: (obj) => {
    if (typeof HTMLElement === 'object') return obj instanceof HTMLElement;
    return !!(obj && typeof obj === 'object' && (obj.nodeType === 1 || obj.nodeType === 9) && typeof obj.nodeName === 'string');
  },
};

export default {
  type,
  flatData,
  isPosition,
  switchEach,
};

import config from '../config';

const isFunction = (fn) => fn && typeof fn === 'function';

const isArray = (arr) => arr instanceof Array;

const isPositiveNumber = (num) => num > 0 && typeof num === 'number' && String(num).indexOf('.') < 0;

const isElement = (obj) => {
  if (typeof HTMLElement === 'object') return obj instanceof HTMLElement;
  return !!(obj && typeof obj === 'object' && (obj.nodeType === 1 || obj.nodeType === 9) && typeof obj.nodeName === 'string');
};

const isPosition = (position) => new RegExp(`\\d+${config.defaultSeparator}\\d+`).test(position);

const isSideWord = (sideWord) => [config.whiteSideWord, config.blackSideWord].includes(sideWord);

export default {
  isFunction,
  isArray,
  isPositiveNumber,
  isElement,
  isPosition,
  isSideWord,
};

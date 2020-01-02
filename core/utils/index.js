import type from './type';
import check from './check';
import config from '../config';

const flatData = (data) => data.reduce((arr, item) => arr.concat(item), []);

const switchEach = (arr) => [arr[1], arr[0]];

const getSide = (sideWord) => (sideWord === config.whiteSideWord ? '白方' : '黑方');

export default {
  type,
  check,
  flatData,
  switchEach,
  getSide,
};

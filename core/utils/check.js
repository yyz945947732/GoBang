import type from './type';
import errors from '../errors';

const arrayCheck = (arr) => {
  if (!type.isArray(arr)) errors.notArrayError(arr);
};

const positionAndSideWordCheck = (position, sideWord) => {
  if (!type.isPosition(position)) errors.positionError(position);
  if (!type.isSideWord(sideWord)) errors.sideWordError(sideWord);
};

export default {
  arrayCheck,
  positionAndSideWordCheck,
};

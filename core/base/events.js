import config from '../config';
import utils from '../utils';

const makeWatchAndRemove = (el, type, fn) => ({
  watch: () => el.addEventListener(String(type), utils.type.isFunction(fn) && fn),
  unwatch: () => el.removeEventListener(String(type), utils.type.isFunction(fn) && fn),
});

const moveEvent = (el, chesspieces, callback) => {
  let sideWords = [config.whiteSideWord, config.blackSideWord];
  utils.check.arrayCheck(chesspieces);
  function move(e) {
    const position = e.target.id;
    if (position && utils.type.isPosition(position)) {
      const positionChesspiece = document.getElementById(position);
      const [chesspiece] = chesspieces;
      const [sideWord] = sideWords;
      if (positionChesspiece.innerHTML) return;
      positionChesspiece.innerHTML = chesspiece;
      chesspieces = utils.switchEach(chesspieces);
      sideWords = utils.switchEach(sideWords);
      if (utils.type.isFunction(callback)) callback(position, sideWord);
    }
  }
  return makeWatchAndRemove(el, 'click', move);
};

const resetEvent = (el, callback) => {
  function reset() {
    el.innerHTML = '';
    if (utils.type.isFunction(callback)) callback();
  }
  return makeWatchAndRemove(el, 'click', reset);
};

export default {
  moveEvent,
  resetEvent,
};

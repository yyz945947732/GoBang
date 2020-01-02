import config from '../config';
import utils from '../utils';

const bindMoveEvent = (el, chesspieces, callback) => {
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
  el.addEventListener('click', move);
};

export default {
  bindMoveEvent,
};

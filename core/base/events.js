import config from '../config';
import utils from '../utils';

const bindMoveEvent = (el, chesspieces, callback) => {
  let sideWords = [config.whiteSideWord, config.blackSideWord];
  function move(e) {
    const position = e.target.id;
    if (position && utils.isPosition(position)) {
      const positionChesspiece = document.getElementById(position);
      const [chesspiece] = chesspieces;
      const [sideWord] = sideWords;
      if (positionChesspiece.innerHTML) return;
      positionChesspiece.innerHTML = chesspiece;
      chesspieces = utils.switchEach(chesspieces);
      sideWords = utils.switchEach(sideWords);
      if (callback && typeof callback === 'function') callback(position, sideWord);
    }
  }
  el.addEventListener('click', move);
};

export default {
  bindMoveEvent,
};

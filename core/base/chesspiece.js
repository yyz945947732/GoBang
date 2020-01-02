const chesspiece = (color) => `<div style="background:${color};border-radius:50%;height:90%;width:90%;margin:auto;"></div>`;

const whiteChess = chesspiece('#f8f8f8');

const blackChess = chesspiece('#000');

export default {
  whiteChess,
  blackChess,
};

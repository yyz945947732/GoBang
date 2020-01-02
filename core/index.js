
import config from './config';
import utils from './utils';
import errors from './errors';
import dataMaker from './base/dataMaker';
import layout from './base/layout';
import cssTools from './base/css';
import drawTools from './base/draw';
import chesspieces from './base/chesspiece';
import events from './base/events';

class GoBang {
  constructor(el, num = config.defaultColNum) {
    this.el = el;
    this.num = num;
    this.chessData = [];
    if (!utils.type.isPositiveNumber(num)) this.num = config.defaultColNum;
    if (!this.el || !utils.type.isElement(this.el)) this.el = drawTools.createEmptyEl(config.defaultContainerName);
  }

  get layout() {
    return this.chessData && this.chessData.map((item) => `${item.join('')}\n`).join('');
  }

  init() {
    const data = dataMaker.layoutData(this.num);
    const statusData = dataMaker.statusData(this.num);
    const gobangLayout = layout(data);
    drawTools.draw(this.el, gobangLayout);
    cssTools.appendCss(data);
    events.bindMoveEvent(this.el, [chesspieces.whiteChess, chesspieces.blackChess], this.move.bind(this));
    this.chessData = statusData;
  }

  move(position, sideWord) {
    if (!utils.isPosition(position)) errors.positionError(position);
    if (![config.whiteSideWord, config.blackSideWord].includes(sideWord)) errors.sideWordError(sideWord);
    const [row, col] = position.split('-');
    this.chessData[row][col] = sideWord;
    console.log(this.layout);
  }
}

export default GoBang;

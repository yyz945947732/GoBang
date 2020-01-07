
import config from './config';
import utils from './utils';
import symbol from './symbol';
import dataMaker from './base/dataMaker';
import layout from './base/layout';
import cssTools from './base/css';
import drawTools from './base/draw';
import chesspieces from './base/chesspiece';
import events from './base/events';
import EventMap from './class/EventMap';
import checker from './base/checker';

class GoBang {
  constructor(el, num = config.defaultColNum) {
    this.el = el;
    this.num = parseInt(num, 10);
    this.chessData = [];
    this.eventMap = new EventMap();
    if (!utils.type.isPositiveNumber(num)) this.num = config.defaultColNum;
    if (!this.el || !utils.type.isElement(this.el)) {
      this.el = drawTools.createEmptyEl(config.defaultContainerName);
    }
  }

  get layout() {
    return this.chessData && this.chessData.map((item) => `${item.join('')}\n`).join('');
  }

  init() {
    this[symbol.GoBang.initEvents]();
    const layoutData = dataMaker.layoutData(this.num);
    drawTools.draw(this.el, layout(layoutData));
    cssTools.appendCss(layoutData);
    this.eventMap.watch('moveEvent');
    this.eventMap.unwatch('resetEvent');
    this.chessData = dataMaker.statusData(this.num);
  }

  move(position, sideWord) {
    utils.check.positionAndSideWordCheck(position, sideWord);
    const [row, col] = position.split(config.defaultSeparator);
    this.chessData[row][col] = sideWord;
    this.check(position, sideWord);
  }

  check(position, sideWord) {
    utils.check.positionAndSideWordCheck(position, sideWord);
    const [row, col] = position.split(config.defaultSeparator);
    if (checker.isWin(row, col, this.chessData, sideWord)) {
      this.end(sideWord);
    }
  }

  end(sideWord) {
    this.eventMap.unwatch('moveEvent');
    this.eventMap.watch('resetEvent');
    drawTools.createTip(`${utils.getSide(sideWord)}获胜!`, this.el);
  }

  [symbol.GoBang.initEvents]() {
    this.eventMap.set('moveEvent', events.moveEvent(
      this.el,
      chesspieces.whiteChessAndBlackChess,
      this.move.bind(this),
    ));
    this.eventMap.set('resetEvent', events.resetEvent(this.el, this.init.bind(this)));
  }
}


export default GoBang;

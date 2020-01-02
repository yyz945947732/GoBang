import GoBang from './core';

window.onload = function onload() {
  const gobang = new GoBang(document.getElementById('GoBang'), 18);
  gobang.init();
};

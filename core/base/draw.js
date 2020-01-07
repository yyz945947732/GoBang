const create = (el) => () => document.createElement(el);

const createTable = create('table');

const createDiv = create('div');

const createSpan = create('span');

const draw = (el, content) => {
  const table = createTable();
  table.innerHTML = content;
  el.appendChild(table);
};

const createEmptyEl = (id) => {
  const el = createDiv();
  el.setAttribute('id', id);
  document.body.appendChild(el);
  return el;
};

const createTip = (content, el = document.body) => {
  const tip = createSpan();
  tip.innerText = content;
  tip.setAttribute('style', 'position:absolute;top:0;left:0;bottom:0;right:0;font-size:26px;color:#ff4400;');
  el.appendChild(tip);
  return tip;
};

export default {
  draw,
  createEmptyEl,
  createTip,
};

const create = (el) => () => document.createElement(el);

const createTable = create('table');

const createDiv = create('div');

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

export default {
  draw,
  createEmptyEl,
};

const wrongFormat = (arg) => `wrong format from ${arg}:`;

const positionError = (position) => {
  throw new Error(wrongFormat('position') + position);
};

const sideWordError = (sideWord) => {
  throw new Error(`unexpected sideWord : ${sideWord}`);
};

const typeError = (expect) => (realData) => {
  throw new TypeError(`expected ${expect} but get ${typeof realData}`);
};

const requireError = (...props) => {
  throw new TypeError(`Object requires ${props.join(',')} property`);
};

const notArrayError = typeError('array');

const notFunctionError = typeError('function');

export default {
  positionError,
  sideWordError,
  requireError,
  notArrayError,
  notFunctionError,
};

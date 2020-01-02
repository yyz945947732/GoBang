const wrongFormat = (arg) => `wrong format from ${arg}:`;

const positionError = (position) => {
  throw new Error(wrongFormat('position') + position);
};

const sideWordError = (sideWord) => {
  throw new Error(`unexpected sideWord : ${sideWord}`);
};

export default {
  positionError,
  sideWordError,
};

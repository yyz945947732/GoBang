const flatData = (data) => data.reduce((arr, item) => arr.concat(item), []);

const isPosition = (position) => /\d+-\d+/.test(position);

const switchEach = (arr) => [arr[1], arr[0]];

export default {
  flatData,
  isPosition,
  switchEach,
};

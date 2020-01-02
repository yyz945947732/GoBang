const correctSideWord = (sideWord) => String(sideWord).repeat(5);

const inSameIndex = (arr, ind) => arr.find((item, index) => index === parseInt(ind, 10));

const getColData = (data, col) => data.map((rowArr) => inSameIndex(rowArr, col));

const checkIfCorrect = (data, sideWord) => data.join('').indexOf(correctSideWord(sideWord)) > 0;

const checkRow = (data, row, sideWord) => checkIfCorrect(data[row], sideWord);

const checkCol = (data, col, sideWord) => checkIfCorrect(getColData(data, col), sideWord);

const filterOverFlow = (data, arr) => arr
  .filter((item) => item.col < parseInt(data.length, 10) && item.row < parseInt(data.length, 10))
  .filter((item) => item.col >= 0 && item.row >= 0);

const getDirectionArr = (data, row, col, fn) => data
  .reduce((sum) => ({
    arr: sum.arr.concat(fn(sum.now)),
    now: fn(sum.now),
  }),
  { arr: [], now: { row, col } }).arr;

const rightBottom = (position) => ({ row: position.row++, col: position.col++ });

const leftBottom = (position) => ({ row: position.row++, col: position.col-- });

const rightTop = (position) => ({ row: position.row--, col: position.col++ });

const leftTop = (position) => ({ row: position.row--, col: position.col-- });

const getRightBottom = (data, row, col) => filterOverFlow(
  data,
  getDirectionArr(data, row, col, rightBottom),
);

const getRightTop = (data, row, col) => filterOverFlow(
  data,
  getDirectionArr(data, row, col, rightTop),
);

const getLeftBottom = (data, row, col) => filterOverFlow(
  data,
  getDirectionArr(data, row, col, leftBottom),
);

const getLeftTop = (data, row, col) => filterOverFlow(
  data,
  getDirectionArr(data, row, col, leftTop),
);

const getCross = (data, row, col, left, right) => left(data, row, col).slice(1)
  .reduce((sum, item) => { sum.unshift(item); return sum; }, [])
  .concat(right(data, row, col))
  .map((item) => data[item.row][item.col]);

const getRightCross = (data, row, col) => getCross(data, row, col, getLeftTop, getRightBottom);

const getLeftCross = (data, row, col) => getCross(data, row, col, getLeftBottom, getRightTop);

const checkRightCross = (data, row, col, sideWord) => checkIfCorrect(
  getRightCross(data, row, col),
  sideWord,
);

const checkLeftCross = (data, row, col, sideWord) => checkIfCorrect(
  getLeftCross(data, row, col),
  sideWord,
);

const isWin = (row, col, data, sideWord) => checkRow(data, row, sideWord)
    || checkCol(data, col, sideWord) || checkRightCross(data, row, col, sideWord)
    || checkLeftCross(data, row, col, sideWord);

export default {
  isWin,
};

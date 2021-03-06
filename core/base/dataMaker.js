import config from '../config';
import utils from '../utils';

const rowData = (num) => (rowIndex) => Array.from({ length: num })
  .map((itemCol, colIndex) => [rowIndex, colIndex]);

const rowStatusData = (num) => () => Array.from({ length: num }, () => config.emptyWord);

const createLayoutData = (fn) => (num) => [...Array.from({ length: num })
  .map((itemRow, rowIndex) => utils.type.isFunction(fn) && fn(rowIndex))];

const layoutData = (num) => createLayoutData(rowData(num))(num);

const statusData = (num) => createLayoutData(rowStatusData(num))(num);

export default {
  layoutData,
  statusData,
};

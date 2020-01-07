import config from '../config';

const cel = (row, col) => `<td id='${row}${config.defaultSeparator}${col}'></td>`;

const row = (cels) => `<tr>${cels}</tr>`;

const layout = (data) => data.map((celsItem) => row(celsItem.map((celItem) => cel(celItem[0], celItem[1])).join(''))).join('');

export default layout;

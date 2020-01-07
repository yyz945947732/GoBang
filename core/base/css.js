const baseSize = () => (window.innerHeight > window.innerWidth
  ? window.innerWidth
  : window.innerHeight);

const tdWidth = (num) => Math.floor(((100 / num) * 0.01) * baseSize());

const border = (direction) => `border-${direction}: 1px solid #000;`;

const css = (data) => `
    *{
        margin:0;
        padding:0;
    }
    table{
        max-width:${window.innerWidth}px;
        max-height:${window.innerHeight}px;
        background:#f1e05a;
        margin:auto;
        ${border('left')}
        ${border('top')}
        border-spacing:0;
    }
    td{
        width:${tdWidth(data.length)}px;
        height:${tdWidth(data.length)}px;
        ${border('right')}
        ${border('bottom')}
        box-sizing:border-box;
    }
`;

const appendCss = (data) => {
  const style = document.createElement('style');
  const head = document.getElementsByTagName('head')[0];
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css(data)));
  head.appendChild(style);
};

export default {
  appendCss,
};

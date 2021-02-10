## pxtovw

> - webpack loader [pxtovw-loader](https://www.npmjs.com/package/pxtovw-loader)
> - postcss plugin https://www.npmjs.com/package/pxtovw-postcss

>px convert vw 
>将px 转成 vw
```
  -w, --viewportWidth [value]', 'set `vw` unit value (default: 750)'
  -o, --output [path]", "the output file dirname")
  -p, --vwPrecision [value]', 'set vw value precision (default: 6)'
  -u, --unitToConvert [value]", "set need to convert unit (default: 'px')"
  -m, --minPixelValue [value]", "mix convert px value (default: 1)"
```
```
  -w, --viewportWidth [value]', '设置视窗宽度 (默认: 750)'
  -o, --output [path]", "设置输出路径")
  -p, --vwPrecision [value]', '设置转换为vw 的保留小数位数 (default: 6)'
  -u, --unitToConvert [value]", "设置需要转换的单位 (default: 'px')"
  -m, --minPixelValue [value]", "最小转换数值 (default: 1)"
```
## API
```
const Pxtovw = require("../pxtovw");
const config = {
  viewportWidth: 750,
  unitPrecision: 6,
  unitToConvert: "px",
  minPixelValue: 1,
};

const pxtovwIns = new Pxtovw(config);
const vwCssText = pxtovwIns.converPxToVw('.....')
```
## use cli
```
npm install pxtovw -g
pxtovw [filename].css -w 750 -o ./out -p 6 -u px -m 1
```

## Example
input test css file test.css
```css
.testcase {
  height: 100px;
  width: 100px;
  border-radius: 20px;
  padding: 10px 10px 10px!important;
  margin: 10px;
  font-size: 16px;
  background-color: bisque;
}
```

cli

```
pxtovw test.css -o ./
```

output css file test.vw.css

```css
.testcase {
  height: 13.333333vw;
  width: 13.333333vw;
  border-radius: 2.666667vw;
  padding: 1.333333vw 1.333333vw 1.333333vw!important;
  margin: 1.333333vw;
  font-size: 2.133333vw;
  background-color: bisque;
}
```

Calculation 

```javascript
// height 100px
//cover vw keep 6  precision
const vwHeight = (100/750)*100 //13.333333
```




## 自定义cli 工具 

## webpack 插件 [pxtovw-loader](https://www.npmjs.com/package/pxtovw-loader)
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
## 使用
```
npm install pxtovw -g
pxtovw [filename].css -w 750 -o ./out -p 6 -u px -m 1
```
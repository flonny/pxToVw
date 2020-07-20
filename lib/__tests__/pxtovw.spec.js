var Pxtovw = require("../pxtovw");
var fs = require("fs-extra");
function saveFile(filePath, content) {
  fs.createFileSync(filePath);
  fs.writeFileSync(filePath, content, { encoding: "utf8" });
}
describe('pxtovw', () => {
  test('property: width,height,padding,margin,', () => {
    const pxtovwIns = new Pxtovw({viewportWidth: 100,});
    console.log(__dirname)
    var cssText = fs.readFileSync('testCase/assets/base.css', { encoding: "utf8" });

    saveFile('testCase/assets/base.output.css',pxtovwIns.converPxToVw(cssText));
    var outPutText = fs.readFileSync('testCase/assets/base.output.css', { encoding: "utf8" });
    var vwCssText = fs.readFileSync('testCase/assets/base.vw.css', { encoding: "utf8" });

    expect(outPutText).toBe(vwCssText)
  })
})

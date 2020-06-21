#!/usr/bin/env node
// this code from px2rem, thanks px2rem
var program = require("commander");
var Pxtovw = require("../index");
var pkg = require('../package.json');
var path = require("path");
var fs = require("fs-extra");
// string to variables of proper type（thanks to zepto）
function deserializeValue(value) {
  var num;
  try {
    return value ?
      value == "true" || value == true ||
      (value == "false" || value == false ? false :
        value == "null" ? null :
        !/^0/.test(value) && !isNaN(num = Number(value)) ? num :
        /^[\[\{]/.test(value) ? JSON.parse(value) :
        value)
      : value;
  } catch (e) {
    return value;
  }
}

function saveFile(filePath, content) {
  fs.createFileSync(filePath);
  fs.writeFileSync(filePath, content, { encoding: "utf8" });
  console.log(filePath);
}
program
  .version(pkg.version)
  .option('-w, --viewportWidth [value]', 'set `vw` unit value (default: 750)', 750)
  .option("-o, --output [path]", "the output file dirname")
  .parse(process.argv);

if (!program.args.length) {
  console.log("No files to process!");
  return false;
}
var config = {
  viewportWidth:  deserializeValue(program.viewportWidth),
  unitPrecision: 5,
  unitToConvert: "px",
  minPixelValue: 1,
};

var pxtovwIns = new Pxtovw(config);

program.args.forEach(function (filePath) {
  if (path.extname(filePath) !== ".css") {
    return;
  }

  var cssText = fs.readFileSync(filePath, { encoding: "utf8" });
  var outputPath = program.output || path.dirname(filePath);
  var fileName = path.basename(filePath);
  var newCssText = pxtovwIns.converPxToVw(cssText);
  var newFileName = fileName.replace(/(.debug)?.css/, ".vw.css");
  var newFilepath = path.join(outputPath, newFileName);
  saveFile(newFilepath, newCssText);
});

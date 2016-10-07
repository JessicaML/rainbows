var colors = require('colors');

var line = process.argv[i];


function makeRainbows(line) {
  console.log(colors.random(line));

}

for (var i = 2; i < process.argv.length; i++){
  makeRainbows(process.argv[i]);
}


//

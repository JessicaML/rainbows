var colors = require('colors');

function makeRainbows(string) {
    console.log(colors.white(string));
    console.log(colors.yellow(string));
    console.log(colors.green(string));
    console.log(colors.cyan(string));
    console.log(colors.blue(string));
    console.log(colors.red(string));
    console.log(colors.magenta(string));
    console.log(colors.random(string));
}

for (var i = 2; i < process.argv.length; i++){
  setInterval(makeRainbows, 1000, process.argv[i]);
}

//

// var colors = require('colors');
//
// var line1 = process.argv[2];
// var line2 = process.argv[3];
// var line3 = process.argv[4];
//
//   console.log(line1.white);
//   console.log(line2.cyan);
//   console.log(line3.red);

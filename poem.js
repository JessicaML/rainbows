var colors = require('colors');

// var line = process.argv[i];

var patrickPoem = [
  "I like to feed the spacemen swimming in the sky.",
  "They smile as they dive for the morsels I throw.",
  "There’s more and more of them these days",
  "with their gadgets building strange structures."
];

function makeRainbows(poem) {
  
  console.log(colors.red(poem[0]));
  console.log(colors.blue(poem[1]));
  console.log(colors.random(poem[2]));
  console.log(colors.white(poem[3]));


}


setInterval(makeRainbows, 1000, patrickPoem);

//

var colors = require('colors');

var patrickPoem = [
  "I like to feed the spacemen swimming in the sky.",
  "They smile as they dive for the morsels I throw.",
  "There’s more and more of them these days",
  "with their gadgets building strange structures."
];

function makeRainbows(poem) {
  for (var i = 0; i < poem.length; i++) {
    console.log(colors.random(poem[i]));
  }
}


setInterval(makeRainbows, 1000, patrickPoem);

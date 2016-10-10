//For the ones who want a good challenge in JavaScript: Write the file below as a
//.txt file and create a node.js program that reads each line and prints it in
//different or random color. This is not a homework, just a good exercise: (edited)



var fs = require('fs');
var colors = require('colors');

function readSong(song) {
  fs.readFile('through-heavens-eyes_txt.txt', function(err, data) {
    var array = data.toString().split('\n');

    for (var i = 0; i < array.length; i++) {
      printRandomColor(array[i]);
    }

    function printRandomColor(string) {
      var randomNumber = Math.floor(Math.random() * 10),
          possibleColors = [
            'red', 'green', 'blue', 'white', 'cyan', 'magenta', 'red', 'green', 'blue', 'red'
          ];

      console.log(colors[possibleColors[randomNumber]](string));
      // dynamic version of: console.log(colors.red(string))
    }
  });
}

for (var i = 2; i < process.argv.length; i++) {
  readSong(process.argv[i]);
}

console.log(readSong());

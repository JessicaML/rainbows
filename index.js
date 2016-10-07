colors = require('colors');

var myString = "Hello world";

function printColors() {


    console.log(myString);
    console.log(myString.yellow);
    console.log(myString.green);
    console.log(myString.cyan);
    console.log(myString.blue);
    console.log(myString.red);
    console.log(myString.magenta);

}
setInterval(printColors, 1000);

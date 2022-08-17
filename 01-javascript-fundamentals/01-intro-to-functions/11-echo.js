// Write a function called "echo"
// have it take in a string and console.log the string "echo-ized"

function echo(string) {
    let echoStr = string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase(); // I took the 
    return echoStr;
}

console.log(echo("Mom!")); // => prints "MOM! ... Mom! ... mom!"
console.log(echo("hey")); // => prints "HEY ... hey ... hey"
console.log(echo("JUMp")); // => prints "JUMP ... JUMp ... jump"

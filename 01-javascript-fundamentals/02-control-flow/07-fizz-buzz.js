// Define a function [fizzBuzz(max)] that takes a number and prints every number 
// from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.

function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {            // let i = 0, make sure that i is less than max, each loop through, add 1
    if (i % 3 === 0 && i % 5 !== 0) {           // use modulo to make sure the remainder is 0 when dividing by three
      console.log(i);                           // print number
    } else if (i % 5 === 0 && i % 3 !== 0) {    // else if the number is divided by five but not devided by three print number
      console.log(i);
    }
  }
}

fizzBuzz(20);


// This second function is another way to do it, but not quite as elegant as the for loop above.

function fizzBuzzWhile(max) {
  let i = 0;
  while (i < max) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
    i++;
  }
}

fizzBuzzWhile(20)


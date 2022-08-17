// From research that I've done it seems like for loops are more recommended than while loops

// FUNCTION 1
function printFives1For(max) {  // create a function and call the paramenter "max"
  for (let i = 0; i < max; i += 1) { // create a for loop that has the variable i = 0, "i" cannot be greater than input (max), add 1 for each loop
    if (i % 5 === 0) { // this is how we make sure that the number can be divided by 5 with no remainder
      console.log(i);
    }
  }
}

printFives1For(19)

// FUNCTION 2
function printFives1(max) { 
  let i = 0;                  // you can see the that more lines are used to create this loop than compared to the for loop
  while (i < max) {           // the simplicity of the for loop is its simplicity compared to the while loop
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

printFives1(19)

// FUNCTION 3
function printFives2(max) {           // This is another example of a for loop and its simplicity the difference being that
  for (let i = 0; i < max; i += 5) {  // instead of using modulo it adds five each time. Which is better between the two? Don't know yet.
    console.log(i);
  }
}

printFives2(19)

// FUNCTION 4
function printFives2While(max) {      // The while loop takes what is contained on one line on the for loop and splits it up
  let i = 0;                          // it is easier to pick out what does what but it also takes quite a few more lines of code
  while (i < max) {
    console.log(i);
    i+= 5;
  }
}

printFives2While(19)

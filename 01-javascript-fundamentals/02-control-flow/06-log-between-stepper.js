// Assignment: Create a function that takes in 3 numbers as parameters. The function should print out numbers between [min] and [max] at [step] intervals.

function logBetweenStepperFor(min, max, step) {   // Create the function, have it use a for loop and name it logBeweenStepperFor
  for (let i = min; i<= max; i += step) {         // For loop, let "i" equal min, then compare it to max and make sure it's less than or equal to,
    console.log(i);                               // add a "step" taken from the inputed value to add to it, repeat until max value is met.
  }
}

logBetweenStepperFor(5, 9, 1)

function logBetweenStepper(min, max, step) {
  let i = min;
  while (i <= max) {
    console.log(i);
    i += step;
  }
}

logBetweenStepper(-10, 15, 5)

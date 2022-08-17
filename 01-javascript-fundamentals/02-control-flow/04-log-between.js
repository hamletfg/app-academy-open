// Based on research that I've done, it seems like between for and while loops, for is the one of the two that is more commonly used

// the simplicity of the for loop is evident in terms of the all the steps being grouped together as compared to 
// how the while loop has them spread out to each individual line.

function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2


function logBetweenWhile(lowNum, highNum) {
  let i = lowNum;
  while (i <= highNum) {
    console.log(i);
    i++ 
  }
}

logBetweenWhile(-1, 2);

function isOdd(number) {
  return (number % 2 !== 0);
}

function isOddConditional(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2))
console.log(isOdd(5))
console.log(isOdd(-17))
console.log(isOddConditional(2))
console.log(isOddConditional(5))
console.log(isOddConditional(-17))

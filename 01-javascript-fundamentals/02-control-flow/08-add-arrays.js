// Write a function that takes in two arrays of numbers and
// returns the two arrays combined into a single array.

function combineArray(array1, array2) {         // Create the function and array1 and array2 are the parameters
    let newArray = array1.concat(array2);       // Create new variable 'newArray' and use .concat to combine both
    return newArray;
}

console.log(combineArray([1, 2], [3, 4]));      // => [2,4,6,8]
console.log(combineArray([17, 5], [6, 7]));     // => [14,2,16]

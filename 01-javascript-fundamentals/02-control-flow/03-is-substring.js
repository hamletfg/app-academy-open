// Function should return |true| if subString is part of the searchString regardless of upper or lowercase
// false if otherwise

// Function takes two parameters(strings): searchString, subString
function isSubstring(searchString, subString) {
 
  // Use the toLowerCase() method to convert string to lowercase and saves it to another
  // variable since it doesn't change the original string
  let lowerSearchStr = searchString.toLowerCase();
  let lowerSubStr = subString.toLowerCase();
  
  // use indexOf() method to compare strings to see if there are any similar characters, true if so, false if not (using "!== -1")
  return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false

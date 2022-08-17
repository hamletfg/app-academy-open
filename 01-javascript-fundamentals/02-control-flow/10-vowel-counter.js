// write a function that takes a string and returns the number of vowels in the word.


// My Method

const vowels = ["a", "e", "i", "o", "u"]

function countVowels(word){

    let vowelcounter = 0;

    for (let letter of word.toLowerCase()) {
        if (vowels.includes(letter)) {
            vowelcounter++
        }
    }
    return vowelcounter;
}

console.log(countVowels("Hello there"));


// App Academy Method 

function countVowels(word) {
    let vowelCounter = 0;
    let index = 0;
  
    while (index < word.length) {
      let letter = word[index];
  
      if (letter === "a" ||
          letter === "e" ||
          letter === "i" ||
          letter === "o" ||
          letter === "u") {
        vowelCounter +=1;
      }
      index++;
    }
  
    return vowelCounter;
  }
  
  console.log(countVowels("bootcamp")); // => 3


// Advanced Input Method

const vowels = ["a", "e", "i", "o", "u"]    // All the vowels are stored in a 'vowels' array

function countVowel(word) {
    
    let count = 0;  // initially, the value of the 'count' variable is 0

    // loop through string to test if each character is a vowel
    for (let letter of word.toLowerCase()) {    // the 'for' loop is used to iterate over all the characters of the string, 
        if (vowels.includes(letter)) {          // the 'toLowerCase' method converts all the characters of a string to lowercase.
            count++;                            // the 'includes()' method checks if the 'vowel' array contains any of the characters of the string.
        }
    }

    // return number of vowels
    return count
}

// take input

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

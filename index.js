function isPalindrome(word) {

  for (let leftIndex = 0, rightIndex = word.length - 1 ; leftIndex < rightIndex ; ++leftIndex, --rightIndex){
    if (word[leftIndex] !== word[rightIndex]){
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
  My pseudocode format resembles a recipe and is written as an ordered list: 

  1. Compare each letter at the beginning of the word to its corresponding letter at the end of the word: 
     e.g 0 to (n - 1), 1 to (n - 2), 2 to (n - 3) and so on.
  2. If they are all equal, then the word is a palindrome, return true. Else return false.
*/

/*
  Add written explanation of your solution here

  1. Create two indices, one starting from the beginning of the word (called leftIndex) and the other from the end (called rightIndex).
  2. Compare the letter at the leftIndex and the rightIndex positions of the word. If they are not equal, the word is not a palindrome, return false.
  3. If the loop terminates, then it is a palindrome, return true because all the correponding letters were found to be equal. 
     The stop clause for the loop is when the leftIndex meets the rightIndex in the middle or passes the rightIndex in the middle which is expressed as
     leftIndex < rightIndex.
     
  The time complexity for my function would be O(n/2) which is O(n), linear time execution when the constants are ignored. However, it would execute significantly 
  faster than a typical O(n) time complexity algorithm because the time of execution grows with only half the input size and not the full input size. 
  For very large strings, this would be a huge perfomance difference. 

  The memory complexity for my function is O(2) since it only requires space for 2 variables, leftIndex and rightIndex, the comparison is done in place
  without a need to copy the word argument. This can be expressed as O(2 * 1) and ignoring the constant 2 gives O(1). Constant memory execution.


  The function can also be made case insensitive by preprocessing the word argument to become a single case 
  (either upper or lower) before executing the algorithm. An illustration is given below: 

  function isPalindrome(word) {

  word = word.toLowerCase(); //or word = word.toUpperCase();
    
  for (let leftIndex = 0, rightIndex = word.length - 1 ; leftIndex < rightIndex ; ++leftIndex, --rightIndex){
    if (word[leftIndex] !== word[rightIndex]){
      return false;
    }
  }

  return true;
  }
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eve"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("nine"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("sir"));
}

module.exports = isPalindrome;

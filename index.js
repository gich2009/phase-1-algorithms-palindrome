function isPalindrome(word) {

  let bufferString = "";

  for (let index = word.length - 1 ; index >= 0 ; --index){
    bufferString += word[index];
  }

  return (bufferString === word) ? true : false;
}

/* 
  Add your pseudocode here
  My pseudocode format resembles a recipe and is written as an ordered list: 

  1. Create an empty buffer string to store the word in reverse.
  2. Loop through the word from end to beginning accumulating each character into the buffer string.
  3. Compare the buffer string(which is reversed) with the original. If equal return true, else return false.
*/

/*
  Add written explanation of your solution here
  The function takes the word argument and loops through in reverse storing the result in a buffer string.
  Once the buffer string is fully populated, the function compares the word argument withe the buffer string
  and returns true if they are equal, otherwise, it returns false.

  The function can also be made case insensitive by preprocessing the word argument to become a single case 
  (either upper or lower) before executing the algorithm. An illustration is given below with the key statement being line 2: 

  function isPalindrome(word) {
    
1    word = word.toUpperCase();      //or word = word.toLowerCase();
    
2    let bufferString = "";

3    for (let index = word.length - 1 ; index >= 0 ; --index){
4      bufferString += word[index];
5    }

6    return (bufferString === word) ? true : false;
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
}

module.exports = isPalindrome;

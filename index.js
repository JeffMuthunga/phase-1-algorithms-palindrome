function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split("").reverse().join("")
  return array === word ? true: false
}


/* 
  Add your pseudocode here
  split the given word to characters 
  turn them to an array
  store a separate array with characters reversed 
  if the new array joined is equal to the first word return true else false
  examples:

  let word = "mango"
  let array1 = word.split("")
  let reverse = array1.reverse()
  let array2 = reverse.join("")

  let word = "mango"

  let array2 = word.split("").reverse().join("")
  let array2 = reverse.join("")

  let word = "abba"

  let array2 = word.split("").reverse().join("")
  console.log(array2 === word? true: false)


*/

/*
  Add written explanation of your solution here
  we first need to split the word argument that we receive we also need to reverse the 
  array gotten form split and then join the adjacent array
  we then use a tertiary operator to compare the word argument with the resulting 
  joined and reversed array  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(word) {
  // Clean the input word by removing spaces and special characters and convert it to lowercase
  const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
  // Initialize two pointers, one starting from the beginning and the other from the end of the cleaned word
  let start = 0;
  let end = cleanedWord.length - 1;

  // While the start pointer is less than the end pointer, do the following:
  while (start < end) {
    // If the characters at the start and end do not match, return false
    if (cleanedWord[start] !== cleanedWord[end]) {
      return false;
    }

    // Move the start pointer forward and the end pointer backward
    start++;
    end--;
  }

  // If the loop completes without returning false, it means the word is a palindrome, so return true
  return true;
}

// Pseudocode:
// 1. Remove spaces and special characters from the input word.
// 2. Convert the cleaned word to lowercase.
// 3. Initialize two pointers (start and end) at the beginning and end of the cleaned word.
// 4. While the start pointer is less than the end pointer, compare characters.
// 5. If any characters don't match, return false (it's not a palindrome).
// 6. If the loop completes without returning false, return true (it's a palindrome).

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

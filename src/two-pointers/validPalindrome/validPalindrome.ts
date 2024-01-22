// Question: Write a function that takes a string, s, as an input and
// determines whether or not it is a palindrome.

export function isAPalindrome(input: string) {
  const inputLength = input.length;
  let start = 0;
  let end = inputLength - 1;

  while (start < end) {
    if (input[start] !== input[end]) return false;
    start++;
    end--;
  }
  return true;
}


// Details

// Time Complexity: O(n) // We traverse the input 
// Space Complexity: O(1) => constant because we use constant space to store two indexes
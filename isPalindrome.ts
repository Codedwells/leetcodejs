// Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function isPalindrome(x: number): boolean {
  return String(x).split('').reverse().join('') === String(x)
}

// TEST CASE
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))

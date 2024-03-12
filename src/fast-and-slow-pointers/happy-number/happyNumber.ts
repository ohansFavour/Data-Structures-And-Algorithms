// Question: Write an algorithm to determine if a number n, is a happy number.
// A happy number is a concept in mathematics that is related to a specific process applied to positive integers.
// The process involves repeatedly summing the squares of the digits of the number until either the result becomes 1 or the process enters into a cycle that does not include 1.
// If the process eventually reaches 1, the number is considered a happy number; otherwise, it is an unhappy number.

export function isHappyNumber(n: number) {
  // Helper function that calculates the sum of squared digits.
  function sumOfSquaredDigits(num: number) {
    let totalSum = 0;
    while (num > 0) {
      let temp = Math.floor(num / 10),
        digit = num % 10;
      num = temp;
      totalSum += digit ** 2;
    }
    return totalSum;
  }

  let slow = sumOfSquaredDigits(n);
  let fast = sumOfSquaredDigits(sumOfSquaredDigits(n));

  while (slow !== 1 && fast !== 1) {
    if (slow === fast) return false;

    slow = sumOfSquaredDigits(slow);
    fast = sumOfSquaredDigits(sumOfSquaredDigits(fast));
  }

  return true;
}

import { isAPalindrome } from './validPalindrome';

describe('Valid Palindrome', () => {
  it('tests that the passed input is a valid palindrome', () => {
    const testCases = [
      {
        input: 'kayak',
        isAPalindrome: true,
      },
      {
        input: 'noticed',
        isAPalindrome: false,
      },
      {
        input: 'madam',
        isAPalindrome: true,
      },
      {
        input: 'tomatoes',
        isAPalindrome: false,
      },
      {
        input: 'hello',
        isAPalindrome: false,
      },
      {
        input: 'racecar',
        isAPalindrome: true,
      },
      {
        input: 'raceanothercarnow',
        isAPalindrome: false,
      },
    ];

    for (const testCase of testCases) {
      const expectedResult = testCase.isAPalindrome;
      const actualResult = isAPalindrome(testCase.input);
      expect(expectedResult).toBe(actualResult);
    }
  });
});

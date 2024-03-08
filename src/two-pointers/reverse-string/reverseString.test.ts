import { reverseString } from './reverseString';

describe('Reverse String', () => {
  it('works as expected', () => {
    const testCases = [
      {
        input: 'Friend',
        output: 'dneirF',
      },
      {
        input: 'Hello World',
        output: 'dlroW olleH',
      },
      {
        input: '  nest you',
        output: 'uoy tsen  ',
      },
    ];

    for (const testCase of testCases) {
      const expectedResult = testCase.output;
      const actualResult = reverseString(testCase.input);
      expect(expectedResult).toBe(actualResult);
    }
  });
});

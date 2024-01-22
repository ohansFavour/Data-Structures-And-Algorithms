import { findSumOfThree } from './sumOfThreeValues';

describe('Sum of three values', () => {
  it('works as expected', () => {
    const testCases = [
      {
        input: [3, 7, 1, 2, 8, 4, 5],
        target: 10,
        canSumUpToTarget: true,
      },
      {
        input: [-1, 2, 1, -4, 5, -3],
        target: 7,
        canSumUpToTarget: false,
      },
      {
        input: [2, 3, 4, 1, 7, 9],
        target: 20,
        canSumUpToTarget: true,
      },
      {
        input: [1, -1, 0],
        target: -1,
        canSumUpToTarget: false,
      },
      {
        input: [2, 4, 2, 7, 6, 3, 1],
        target: 10,
        canSumUpToTarget: true,
      },
    ];

    for (const testCase of testCases) {
      const expectedResult = testCase.canSumUpToTarget;
      const actualResult = findSumOfThree(testCase.input, testCase.target);
      console.log(testCase.target);
      expect(expectedResult).toBe(actualResult);
    }
  });
});

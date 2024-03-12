import { isHappyNumber } from "./happyNumber";

describe('Happy Number', () => {
  it('works as expected', () => {
    const testCases = [
      {
        input: 10,
        output: true,
      },
      {
        input: 13,
        output: true,
      },
      {
        input: 10,
        output: true,
      },
      {
        input: 97,
        output: true,
      },
      {
        input: 12,
        output: false,
      },
      {
        input: 98,
        output: false,
      },
      {
        input: 99,
        output: false,
      },
      {
        input: 120,
        output: false,
      },
    ];

    for (const testCase of testCases) {
      const expectedResult = testCase.output;
      const actualResult = isHappyNumber(testCase.input);
      expect(expectedResult).toBe(actualResult);
    }
  });
});

import { sortColors } from './sortColors';

describe('Sort Colors', () => {
  it('works as expected', () => {
    const testCases = [
      {
        input: [1, 0, 1, 2, 2, 0],
        output: [0, 0, 1, 1, 2, 2],
      },
      {
        input: [1, 0, 1, 2],
        output: [0, 1, 1, 2],
      },
      {
        input: [0, 1, 1, 2, 1, 2],
        output: [0, 1, 1, 1, 2, 2],
      },
      {
        input: [1, 0, 1],
        output: [0, 1, 1],
      },
    ];

    for (const testCase of testCases) {
      const expectedResult = testCase.output;
      const actualResult = sortColors(testCase.input);
      expect(expectedResult).toStrictEqual(actualResult);
    }
  });
});

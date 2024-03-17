import { mergeIntervals } from './mergeOverlappingIntervals';

describe('Merge Overlapping Interval arrays', () => {
  it('works as expected', () => {
    const testCases = [
      {
        input: [
          [1, 3],
          [4, 5],
        ],
        output: [
          [1, 3],
          [4, 5],
        ],
      },
      {
        input: [
          [1, 3],
          [2, 5],
        ],
        output: [[1, 5]],
      },
      {
        input: [
          [1, 3],
          [2, 5],
          [6, 9],
        ],
        output: [
          [1, 5],
          [6, 9],
        ],
      },
    ];

    for (const testCase of testCases) {
      const expectedResult = testCase.output;
      const actualResult = mergeIntervals(testCase.input);
      expect(expectedResult).toStrictEqual(actualResult);
    }
  });
});

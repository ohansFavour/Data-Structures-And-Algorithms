// Question: We are given an array of closed intervals, intervals,
// where each interval has a start time and an end time.
// The input array is sorted with respect to the start times of each interval.
// Your task is to merge the overlapping intervals and return a new output array consisting of only the non-overlapping intervals.

function mergeIntervals(intervals: number[][]) {
  let result = [];
  // insert first interval
  result.push(intervals[0]);

  for (let i = 1; i <= intervals.length - 1; i++) {
    let currStart = intervals[i][0];
    let currEnd = intervals[i][1];
    let prevEnd = result[result.length - 1][1];

    if (currStart <= prevEnd) {
      // There is an overlap
      result[result.length - 1][1] = Math.max(prevEnd, currEnd);
    } else {
      // No Overlap
      result.push(intervals[i]);
    }
  }
  return result;
}

export { mergeIntervals };

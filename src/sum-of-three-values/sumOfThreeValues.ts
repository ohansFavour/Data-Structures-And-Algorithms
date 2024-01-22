// Question: Given an array of integers, nums, and an integer value, target,
// determine if there are any three integers in nums whose sum is equal to the target,
// that is, nums[i] + nums[j] + nums[k] == target.
// Return TRUE if three such integers exist in the array. Otherwise, return FALSE.

export function findSumOfThree(nums: Array<number>, target:number) {
    // Sort array by ascending order
  const sortedArr = nums.sort((a, b) => a - b);
  // iterate the entire input
  for (let i = 0; i < sortedArr.length - 2; i++) {
    const currentValue = sortedArr[i];
    // iterate using two pointers over the rest
    let head = i + 1;
    let tail = sortedArr.length - 1;
    while (head < tail) {
      if (currentValue + sortedArr[head] + sortedArr[tail] === target)
        return true;

      if (currentValue + sortedArr[head] + sortedArr[tail] > target) tail--;
      if (currentValue + sortedArr[head] + sortedArr[tail] < target) head++;
    }
  }
  return false;
}

// Details
       
// Sorting the array in ascending order takes O(nlog(n)) and the nested loop takes O(n^2)
// Entire algorithm takes O(n^2)


// Space Complexity: O(1)
// The space complexity of this solution, primarily, depends on the sorting algorithm we use. 
// We use the built-in JavaScript function, sort(), which does the in-place sorting. 
// Therefore, the space complexity of the provided solution is O(1)


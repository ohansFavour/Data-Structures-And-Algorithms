// Question: Write an algorithm to reverse a string

export function reverseString(str: string) {
  let start = 0;
  let end = str.length;
  let strArr = [...str];

  while (start < end) {
    [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
    start++;
    end--;
  }
  return strArr.join('');
}

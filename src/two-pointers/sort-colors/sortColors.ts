// Question: Given an array, colors, which contains a combination of the following three elements:
// 0 (representing red)
// 1 (representing white)
// 2 (representing blue)
// Sort the array in place so that the elements of the same color are adjacent,
// with the colors in the order of red, white, and blue. The function should return the same array.

export function sortColors(colors: number[]) {
  // Initialize the red, white, and blue pointers
  let red = 0;
  let white = 0;
  let blue = colors.length - 1;

  while (white <= blue) {
    // If the white pointer is pointing to red
    if (colors[white] === 0) {
      // Swap the values if the red pointer is not pointing to red
      if (colors[red] !== 0) {
        [colors[red], colors[white]] = [colors[white], colors[red]];
      }

      // Increment both the red and white pointers
      white++;
      red++;
    }

    // If the white pointer is pointing to white, no swapping is required
    // Just increment the white pointer
    else if (colors[white] === 1) {
      white++;
    }

    // If the white pointer is pointing to blue
    else {
      // Swap the values if the blue pointer is not pointing to blue
      if (colors[blue] !== 2) {
        [colors[white], colors[blue]] = [colors[blue], colors[white]];
      }

      // Decrement the blue pointer
      blue--;
    }
  }

  return colors;
}

// The time complexity of this solution is O(n) since we’re only traversing the array once.
// The space complexity of this solution is O(1) since no extra space is used.

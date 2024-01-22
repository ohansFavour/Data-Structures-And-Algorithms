// Question: Given a singly linked list,
// remove the nth node from the end of the list and return its head.


export function removeNthLastNode(head:any, n: number) {
  let right = head;
  let left = head;

  for (let i = 0; i < n; i++) {
    right = right.next;
  }
  if (!right) {
    return head.next;
  }
  while (right.next != null) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return head;
}

// Details

// Time Complexity: O(n) // We traverse the input 
// Space Complexity: O(1) => constant because we use constant space to store two indexes

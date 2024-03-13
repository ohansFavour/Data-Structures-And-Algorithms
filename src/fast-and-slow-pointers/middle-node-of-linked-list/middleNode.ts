// Question: Given the head of a singly linked list,
// return the middle node of the linked list. If the number of nodes in the linked list is even,
// there will be two middle nodes, so return the second one.

export function getMiddleNode(head: { next: any }) {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
}

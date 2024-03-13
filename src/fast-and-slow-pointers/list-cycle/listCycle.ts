// Question: Check whether or not a linked list contains a cycle.
// If a cycle exists, return TRUE. Otherwise, return FALSE.
// The cycle means that at least one node can be reached again by traversing the next pointer.

type LinkedListNode = { next: any };
export function detectCycle(head: LinkedListNode) {
  if (!head) {
    return false;
  }

  let fastPointer = head.next;
  let slowPointer = head;

  while (fastPointer !== slowPointer) {
    if (fastPointer === null) {
      return false;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next?.next;
  }

  return true;
}

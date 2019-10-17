interface Node {
  next: Node | null;
  value: string;
};

// what can we do to access in O(1) at the tail
interface LinkedList {
  head: Node;
}

export const emptyLinkedList: LinkedList = { head: null };

// create a new node
export function createNode(value: string) : Node {
  return { value, next: null };
}

// create a new linked list
export function createLinkedList(firstValue: string) : LinkedList {
  return { head: createNode(firstValue) };
}

// insert a new node after a node in a linked list
export function insertAfter(node: Node, value: string) : Node {
  let newNode = createNode(value);
  let oldNode = node.next;

  newNode.next = oldNode;
  node.next = newNode;

  return newNode;
}

export function tail(linkedList: LinkedList) : Node {
  let tail = linkedList.head;

  while(tail.next !== null) {
    tail = tail.next;
  }
  return tail;
}

export function append(linkedList: LinkedList, value: string) : Node {
  let tailLinkedList: Node = tail(linkedList);
  return insertAfter(tailLinkedList, value);
}

export function removeAfter(linkedList: LinkedList, node: Node): Node {
  let removedNode = node.next;
  if(!removedNode) {
    return null;
  }
  let newNext = removedNode.next;
  node.next = newNext;
  removedNode.next = null;

  return removedNode;
}

export function removeHead(linkedList: LinkedList) : Node {
  let oldHead = linkedList.head;
  let newHead = linkedList.head.next;
  linkedList.head = newHead;
  oldHead.next = null;

  return oldHead;
}

export function findNode(linkedList: LinkedList, value: string) : Node {
  let iterator = linkedList.head;
  while(iterator && iterator.value !== value) {
    iterator = iterator.next;
  }
  return iterator;
}

export function forEach(linkedList: LinkedList, callback: (value: string, index: number) => void) : void {
  let iterator = linkedList.head;
  let index = 0;
  while(iterator) {
    callback(iterator.value, index);
    index = index + 1;
    iterator = iterator.next;
  }
}

export function toMap(linkedList: LinkedList) : Node[] {
  let nodes : Node[] = [linkedList.head];
  let iterator = linkedList.head;
  while(iterator) {
    iterator = iterator.next;
    if(iterator) {
      nodes.push(iterator);
    }
  }
  return nodes;
}

export function print(linkedList: LinkedList) : string {
  let results : string[] = [];
  forEach(linkedList, (value) => { results.push(value) } );
  return results.join(", ");
}

export function length(linkedList: LinkedList) : number {
  if(linkedList.head === null) {
    return 0;
  };
  let len = 0;
  let iterator = linkedList.head;
  while(iterator) {
    len = len + 1;
    iterator = iterator.next;
  }
  return len;
}
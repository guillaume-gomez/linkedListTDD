export interface Node {
  next: Node | null;
  value: string;
};

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
  
}

// insert a new node after a node in a linked list
export function insertAfter(node: Node, value: string) : Node {
  
}

// insert after tail
export function append(linkedList: LinkedList, value: string) : Node {
  let tailLinkedList: Node = tail(linkedList);
  return insertAfter(tailLinkedList, value);
}

export function length(linkedList: LinkedList) : number {
  return 0;
}

export function tail(linkedList: LinkedList) : Node {
 
}

export function findNode(linkedList: LinkedList, value: string) : Node {
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

export function forEach(linkedList: LinkedList, callback: (value: string, index: number) => void) : void {
}

export function print(linkedList: LinkedList) : string {
  
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

export function updateNode(node: Node, value: string) : Node {
  node.value = value;
  return node;
}
import { shallow } from "enzyme";

import { 
  emptyLinkedList,
  createNode,
  createLinkedList,
  length,
  tail,
  findNode,
  append,
  insertAfter,
  removeHead,
  removeAfter,
  forEach,
  print,
  toMap
} from "../../LinkedList";


it("create an empty linked list", () => {
  expect(emptyLinkedList.head).toBe(null);
});

it("create a node", () => {
  expect(createNode("a new node")).toEqual({ value: "a new node", next: null});
});

it("create an linked list with only one item", () => {
  const linkedList = createLinkedList("first node");
  expect(linkedList.head.value).toBe("first node");
  expect(linkedList.head.next).toBe(null);
});

it("should insert a node after a specific node in linkedlist", () => {
  const linkedList = createLinkedList("first node");
  const secondNode = insertAfter(linkedList.head, "second node");
  expect(secondNode.value).toBe("second node")
  expect(linkedList.head.next).toBe(secondNode)
});

it("get the linked list length", () => {
  expect(length(emptyLinkedList)).toBe(0)
  const linkedList = createLinkedList("first node");
  expect(length(linkedList)).toBe(1);

  const secondNode = insertAfter(linkedList.head, "second node");
  const thirdNode = insertAfter(secondNode, "third node");
  expect(length(linkedList)).toBe(3);
});

it("should insert a node in the middle of linkedlist", () => {
  const linkedList = createLinkedList("first node");
  const secondNode = insertAfter(linkedList.head, "second node");
  const thirdNode = insertAfter(secondNode, "third node");
  
  const fourthNode = insertAfter(secondNode, "fourth Node")

  expect(secondNode.next).toEqual(fourthNode)
  expect(fourthNode.next).toEqual(thirdNode)
});


it("get the tail", () => {
  const linkedList = createLinkedList("first node");
  const secondNode = insertAfter(linkedList.head, "second node");
  const thirdNode = insertAfter(secondNode, "third node");
  
  expect(tail(linkedList)).toEqual(thirdNode);

});

it("find value in one item linked list", () => {
  const linkedList = createLinkedList("first node");
  expect(length(linkedList)).toBe(1);

  const node = findNode(linkedList, "first node");
  expect(node.value).toBe("first node");

  const nodeNotFound = findNode(linkedList, "no existing node");
  expect(nodeNotFound).toBe(null);
});


it("use forEach in a linked list", () => {
  const linkedList = createLinkedList("first node");
  const secondNode = append(linkedList, "second node");
  const thirdNode = append(linkedList, "third node");
  
  let expectedResult = ["node 0", "node 1", "node 2"];
  let result : string[] = [];
  forEach(linkedList, (value, index) => {
    const computedValue = `${value.slice(value.length - 4)} ${index}`;
    result.push(computedValue);
  });
  expect(expectedResult).toEqual(result);

});

it("use print fonction to display the linked list values", () => {
  const linkedList = createLinkedList("1");
  const secondNode = append(linkedList, "23");
  const thirdNode = append(linkedList, "456");

  const expectedResult = "1, 23, 456";
  expect(print(linkedList)).toEqual(expectedResult);
});


it("manipulate a linked list", () => {
  const linkedList = createLinkedList("first node");
  const secondNode = append(linkedList, "second node");
  expect(length(linkedList)).toBe(2);

  const thirdNode = append(linkedList, "third node");
  expect(length(linkedList)).toBe(3);

  const deletedNode = removeHead(linkedList);
  expect(deletedNode.value).toBe("first node");
  expect(linkedList.head.value).toBe("second node");

  expect(length(linkedList)).toBe(2);

  const fourthNode = append(linkedList, "fourth node");
  expect(length(linkedList)).toBe(3);
  const deletedNodeTail = removeAfter(linkedList, thirdNode);
  expect(deletedNodeTail).toBe(fourthNode);
});

it("find values in a manipulated linked list", () => {
  const linkedList = createLinkedList("first node");
  const secondNode = append(linkedList, "second node");
  const thirdNode = append(linkedList, "third node");
  
  const node = findNode(linkedList, "second node");
  expect(node.value).toBe("second node");

  const deletedNode = removeHead(linkedList);
  expect(deletedNode.value).toBe("first node");
  expect(linkedList.head.value).toBe("second node");

  expect(findNode(linkedList, "first node")).toBe(null);
  expect(findNode(linkedList, "second node")).toBe(secondNode);
  expect(length(linkedList)).toBe(2);

  const fourthNode = append(linkedList, "fourth node");
  expect(length(linkedList)).toBe(3);
  const deletedNodeTail = removeAfter(linkedList, thirdNode);
  expect(deletedNodeTail).toBe(fourthNode);

  expect(findNode(linkedList, "fourth node")).toBe(null);
  expect(findNode(linkedList, "third node")).toBe(thirdNode);
});

it("use toMap function to get all nodes", () => {
  const linkedList = createLinkedList("a");
  const secondNode = append(linkedList, "b");
  const thirdNode = append(linkedList, "c");

  const expectedResult = [{ value: "a", next: secondNode }, { value: "b", next: thirdNode }, { value: "c", next: null }];
  expect(toMap(linkedList)).toEqual(expectedResult);
})
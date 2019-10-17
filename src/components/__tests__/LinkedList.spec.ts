import { shallow } from "enzyme";

import { emptyLinkedList, createLinkedList, length } from "../../LinkedList";

it("create an empty linked list", () => {
  expect(emptyLinkedList.head).toBe(null);
  expect(length(emptyLinkedList)).toBe(0);
});


it("create an linked list with only one item", () => {
  const linkedList = createLinkedList("first node");
  expect(linkedList.head.value).toBe("first node");
  expect(linkedList.head.next).toBe(null);
  expect(length(linkedList)).toBe(1);
});


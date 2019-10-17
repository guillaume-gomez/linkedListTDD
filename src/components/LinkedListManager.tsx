import React, { useState } from 'react';
import { 
  createLinkedList,
  append,
  removeAfter,
  removeHead,
  print,
  length,
  toMap
} from "../LinkedList";
import { Node } from "./Node";

let linkedList = createLinkedList("first node");

export const LinkedListManager = () => {
  
  const [nodeArray, setNodeArray] = useState([linkedList.head]);

  function addItem() {
    const newNode = append(linkedList, "another node");
    console.log(newNode)
    const nodes = toMap(linkedList);
    setNodeArray([...nodes, newNode])
  }

  console.log("rerender")

  return (
    <div>
      <div>
        <h1> Linked list manager</h1>
      </div>
      <div>
        {
          nodeArray.map(node => {
            return <Node value={node.value} />
          })
        }
      </div>
      <div>
        <button onClick={addItem}>Add item</button>
      </div>
      <div>
        <p> Print the linked list : { print(linkedList) }</p>
        <p> Length : {length(linkedList) } </p>
      </div>
    </div>
  );
}
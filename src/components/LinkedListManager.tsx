import React, { useState } from "react";
import {
  createLinkedList,
  append,
  removeAfter,
  removeHead,
  print,
  length,
  toMap,
  updateNode,
  Node
} from "../LinkedList";
import { NodeLinkedList } from "./NodeLinkedList";

// we assume that data structure is mutable and can cause react issues.
// The purpose here is to use linked list developed in the first part of the interview
// DO NOT INJECT mutable data struction on react component :)
let linkedList = createLinkedList("first node");

export const LinkedListManager = () => {
  const [nodeArray, setNodeArray] = useState([linkedList.head]);

  function addItem() {
  }

  function updateNodeItem(node: Node, newNode: Node, nodeIndex: number) {
    const newNodes = nodeArray.map((node, index) => {
      if(index === nodeIndex) {
        return newNode;
      }
      return node;
    });
    setNodeArray(newNodes);
  }

  function removeNode(nodeBefore: Node) {

  }

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Quicksand",
          fontSize: "24px",
          letterSpacing: "2px",
          textDecoration: "underline",
          color: "#004D71"
        }}
      >
        <h1> Linked list manager</h1>
      </div>
      <div style={{ fontFamily: "Open Sans", fontSize: "14px" }}>
        {nodeArray.map((node, index) => (
          <NodeLinkedList
            key={index}
            node={node}
            onchangeCallback={newNode => updateNodeItem(node, newNode, index)}
          >
            {index > 0 && index < nodeArray.length - 1 ? (
              <button
                onClick={() => {
                  removeNode(nodeArray[index - 1]);
                }}
              >
                Remove
              </button>
            ) : null}
          </NodeLinkedList>
        ))}
      </div>
      <div>
        <button onClick={addItem}>Add item</button>
      </div>
      <div>
        <p>
          Length : <b>{}</b>
        </p>
        <p> To String : {} </p>
      </div>
    </div>
  );
};
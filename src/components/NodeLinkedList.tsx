import React, { useState } from "react";
import { Node } from "../LinkedList";

interface NodeProps {
  node: Node;
  onchangeCallback: (node: Node) => void;
  children: React.ReactNode;
}

export const NodeLinkedList = ({
  node,
  onchangeCallback,
  children
}: NodeProps) => {
  function onchange(event: React.ChangeEvent<HTMLInputElement>) {
  }

  return (
    <div>
      <label >Value:</label>

      <input
        type="text"
        id="value"
        name="value"
        value={node.value}
        onChange={onchange}
      />
      {children}
    </div>
  );
};

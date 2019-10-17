import React, { useState } from 'react';

interface NodeProps {
  value: string;
}

export const Node = ({value} : NodeProps) => {

  return (
    <div>
     {value}
    </div>
  );
}
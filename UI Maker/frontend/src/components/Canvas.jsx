import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Button } from './widgets/Button';
import { TextField } from './widgets/TextField';
import { Label } from './widgets/Label';
import { Rectangle } from './widgets/Rectangle';

const componentMap = {
  Button: Button,
  TextField: TextField,
  Label: Label,
  Rectangle: Rectangle,
};

export const Canvas = ({ components, onSelect, selectedComponentId }) => {
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  return (
    <div
      ref={setNodeRef}
      style={{ minHeight: '400px', border: '1px solid #4a007a', padding: '20px', flexGrow: 1, backgroundColor: '#0a0a1e', borderRadius: '8px', boxShadow: '0 0 15px rgba(74, 0, 122, 0.7)' }}
    >
      {components.map((comp, index) => {
        const Component = componentMap[comp.type];
        return (
          <div
            key={index}
            onClick={() => onSelect(index)}
            style={{
              border: index === selectedComponentId ? '2px solid blue' : '1px solid transparent',
              cursor: 'pointer',
            }}
          >
            <Component {...comp.props} />
          </div>
        );
      })}
    </div>
  );
};
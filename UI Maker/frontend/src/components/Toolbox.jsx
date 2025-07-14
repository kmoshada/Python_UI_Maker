import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Draggable = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : {};

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export const Toolbox = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #4a007a', borderRadius: '8px', backgroundColor: '#1a002a', boxShadow: '0 0 15px rgba(74, 0, 122, 0.7)', marginRight: '20px', minWidth: '200px' }}>
      <h3>Toolbox</h3>
      <Draggable id="Button">
        <button style={{ background: 'linear-gradient(45deg, #8a2be2, #4b0082)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', margin: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>Button</button>
      </Draggable>
      <Draggable id="TextField">
        <input type="text" placeholder="TextField" readOnly style={{ padding: '8px', borderRadius: '5px', border: '1px solid #6a0dad', backgroundColor: '#2a003a', color: '#e0e0e0', margin: '5px' }} />
      </Draggable>
      <Draggable id="Label">
        <p style={{ background: '#333', color: '#e0e0e0', padding: '8px', borderRadius: '5px', margin: '5px' }}>Label</p>
      </Draggable>
      <Draggable id="Rectangle">
        <div style={{ width: '50px', height: '50px', backgroundColor: 'gray', border: '1px solid black' }}></div>
      </Draggable>
    </div>
  );
};
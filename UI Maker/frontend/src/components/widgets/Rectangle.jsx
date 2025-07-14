import React from 'react';

export const Rectangle = ({ width, height, color }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        border: '1px solid black',
      }}
    ></div>
  );
};

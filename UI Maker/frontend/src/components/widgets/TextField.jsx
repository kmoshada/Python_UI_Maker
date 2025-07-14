import React from 'react';

export const TextField = ({ label }) => {
  return <input type="text" placeholder={label} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #6a0dad', backgroundColor: '#2a003a', color: '#e0e0e0', margin: '5px' }} />;
};
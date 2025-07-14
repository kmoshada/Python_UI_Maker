import React from 'react';

export const Button = ({ label }) => {
  return <button style={{ background: 'linear-gradient(45deg, #8a2be2, #4b0082)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', margin: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>{label}</button>;
};
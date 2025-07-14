import React, { useState } from 'react';
import axios from 'axios';
import { DndContext } from '@dnd-kit/core';
import { Toolbox } from './Toolbox';
import { Canvas } from './Canvas';

export default function Editor() {
  const [components, setComponents] = useState([]);
  const [generatedCode, setGeneratedCode] = useState('');
  const [selectedComponentId, setSelectedComponentId] = useState(null);

  const handleSelectComponent = (id) => {
    setSelectedComponentId(id);
  };

  const handleColorChange = (e) => {
    if (selectedComponentId !== null) {
      setComponents((prev) =>
        prev.map((comp, index) =>
          index === selectedComponentId
            ? { ...comp, props: { ...comp.props, color: e.target.value } }
            : comp
        )
      );
    }
  };

  const handleDragEnd = (event) => {
    if (event.over && event.over.id === 'canvas') {
      let newComponent;
      if (event.active.id === "Label") {
        newComponent = {
          type: event.active.id,
          props: { text: event.active.id },
        };
      } else if (event.active.id === "Rectangle") {
        newComponent = {
          type: event.active.id,
          props: { width: 100, height: 100, color: "#CCCCCC" },
        };
      } else {
        newComponent = {
          type: event.active.id,
          props: { label: event.active.id },
        };
      }
      setComponents((prev) => [...prev, newComponent]);
    }
  };

  const handleExport = async () => {
    const res = await axios.post("http://localhost:8000/generate/kivy", components);
    setGeneratedCode(res.data.code);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex' }}>
        <Toolbox />
        <Canvas components={components} onSelect={handleSelectComponent} selectedComponentId={selectedComponentId} />
      </div>
      {selectedComponentId !== null && components[selectedComponentId]?.type === "Rectangle" && (
        <div>
          <label htmlFor="colorPicker">Color:</label>
          <input
            type="color"
            id="colorPicker"
            value={components[selectedComponentId].props.color}
            onChange={handleColorChange}
          />
        </div>
      )}
      <button onClick={handleExport} style={{ background: 'linear-gradient(45deg, #00bcd4, #00838f)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px', boxShadow: '0 5px 15px rgba(0, 188, 212, 0.4)' }}>Export as Kivy</button>
      <h3>Generated Code:</h3>
      <pre style={{ background: '#1a1a2e', color: '#00bcd4', padding: '15px', borderRadius: '8px', textAlign: 'left', overflowX: 'auto', boxShadow: 'inset 0 0 10px rgba(0, 188, 212, 0.3)' }}>{generatedCode}</pre>
    </DndContext>
  );
}
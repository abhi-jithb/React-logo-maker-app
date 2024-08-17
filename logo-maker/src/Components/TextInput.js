import React from 'react';
import './TextInput.css';

function TextInput({ setText, setTextColor, setTextSize, setFontFamily }) {
  return (
    <div className="text-input-container">
      <input 
        type="text" 
        placeholder="Enter logo text" 
        className="text-input" 
        onChange={(e) => setText(e.target.value)} 
      />
      <input 
        type="color" 
        onChange={(e) => setTextColor(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Font Size" 
        className="text-size-input" 
        onChange={(e) => setTextSize(Number(e.target.value))} 
      />
      <select className="font-select" onChange={(e) => setFontFamily(e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
      </select>
    </div>
  );
}

export default TextInput;

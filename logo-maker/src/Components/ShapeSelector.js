import React from 'react';
import './ShapeSelector.css';

function ShapeSelector({ addShape, setShapeColor }) {
  return (
    <div className="shape-selector-container">
      <button className="shape-btn" onClick={() => addShape('circle')}>Add Circle</button>
      <button className="shape-btn" onClick={() => addShape('square')}>Add Square</button>
      <button className="shape-btn" onClick={() => addShape('triangle')}>Add Triangle</button>
      <input 
        type="color" 
        onChange={(e) => setShapeColor(e.target.value)} 
      />
    </div>
  );
}

export default ShapeSelector;

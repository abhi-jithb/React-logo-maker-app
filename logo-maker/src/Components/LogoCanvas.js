import React from 'react';

function LogoCanvas({ logoElements }) {
  return (
    <div id="logo-canvas" style={{ backgroundColor: logoElements.backgroundColor, padding: '20px', border: '1px solid #ccc', display: 'inline-block' }}>
      <div style={{ color: logoElements.textColor, fontSize: logoElements.textSize, fontFamily: logoElements.fontFamily }}>
        {logoElements.text}
      </div>
      {logoElements.shapes.map((shape, index) => (
        <div key={index} style={{ backgroundColor: logoElements.shapeColor, width: '50px', height: '50px', margin: '10px', display: 'inline-block' }}>
          {shape === 'circle' && <div style={{ borderRadius: '50%', width: '100%', height: '100%', backgroundColor: logoElements.shapeColor }}></div>}
          {shape === 'square' && <div style={{ width: '100%', height: '100%', backgroundColor: logoElements.shapeColor }}></div>}
          {shape === 'triangle' && (
            <div style={{ width: '0', height: '0', borderLeft: '25px solid transparent', borderRight: '25px solid transparent', borderBottom: `50px solid ${logoElements.shapeColor}` }}></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LogoCanvas;

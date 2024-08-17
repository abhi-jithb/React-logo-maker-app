import React, { useState } from 'react';
import LogoCanvas from './Components/LogoCanvas';
import TextInput from './Components/TextInput';
import ShapeSelector from './Components/ShapeSelector';
import html2canvas from 'html2canvas';
import './App.css'; // Import the CSS file

function App() {
  const [logoElements, setLogoElements] = useState({
    text: '',
    textColor: '#000000',
    textSize: 20,
    fontFamily: 'Arial',
    shapes: [],
    shapeColor: '#000000',
    backgroundColor: '#ffffff',
  });

  const setText = (text) => setLogoElements({ ...logoElements, text });
  const setTextColor = (color) => setLogoElements({ ...logoElements, textColor: color });
  const setTextSize = (size) => setLogoElements({ ...logoElements, textSize: size });
  const setFontFamily = (fontFamily) => setLogoElements({ ...logoElements, fontFamily });
  const addShape = (shape) => setLogoElements({ ...logoElements, shapes: [...logoElements.shapes, shape] });
  const setShapeColor = (color) => setLogoElements({ ...logoElements, shapeColor: color });
  const setBackgroundColor = (color) => setLogoElements({ ...logoElements, backgroundColor: color });

  const saveLogo = () => {
    localStorage.setItem('savedLogo', JSON.stringify(logoElements));
  };

  const loadLogo = () => {
    const savedLogo = localStorage.getItem('savedLogo');
    if (savedLogo) {
      setLogoElements(JSON.parse(savedLogo));
    }
  };

  const downloadLogo = () => {
    const canvasElement = document.querySelector('#logo-canvas');
    html2canvas(canvasElement).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'logo.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const resetLogo = () => {
    setLogoElements({
      text: '',
      textColor: '#000000',
      textSize: 20,
      fontFamily: 'Arial',
      shapes: [],
      shapeColor: '#000000',
      backgroundColor: '#ffffff',
    });
  };

  const [previewVisible, setPreviewVisible] = useState(false);
  const togglePreview = () => setPreviewVisible(!previewVisible);

  return (
    <div className="app-container">
      <h1 className="app-title">Logo Maker</h1>
      <div className="controls-container">
        <TextInput 
          setText={setText} 
          setTextColor={setTextColor} 
          setTextSize={setTextSize} 
          setFontFamily={setFontFamily} 
        />
        <ShapeSelector addShape={addShape} setShapeColor={setShapeColor} />
        <div className="color-picker">
          <label>Background Color: </label>
          <input 
            type="color" 
            value={logoElements.backgroundColor} 
            onChange={(e) => setBackgroundColor(e.target.value)} 
          />
        </div>
      </div>
      <LogoCanvas logoElements={logoElements} />
      <div className="buttons-container">
        <button className="btn" onClick={downloadLogo}>Download Logo</button>
        <button className="btn" onClick={saveLogo}>Save Logo</button>
        <button className="btn" onClick={loadLogo}>Load Logo</button>
        <button className="btn" onClick={resetLogo}>Reset</button>
        <button className="btn" onClick={togglePreview}>Preview Logo</button>
      </div>

      {previewVisible && (
        <div className="preview-modal">
          <h2>Logo Preview</h2>
          <LogoCanvas logoElements={logoElements} />
          <button className="btn close-btn" onClick={togglePreview}>Close Preview</button>
        </div>
      )}
    </div>
  );
}

export default App;

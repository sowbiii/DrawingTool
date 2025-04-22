// import React from "react";

// function Home(){
//     return(
//         <h2>Home Component</h2>
//     )
// }

// export default Home



// import  { useRef, useState ,useEffect} from 'react';
// import './Home.css';

// function Home() {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [prevX, setPrevX] = useState(0);
//   const [prevY, setPrevY] = useState(0);
//   const [selectedColor, setSelectedColor] = useState('#000');
//   const [brushWidth, setBrushWidth] = useState(5);

//   // useEffect(() => {
//   //   const canvas = canvasRef.current;
//   //   const context = canvas.getContext('2d');

//   // 
//   //   canvas.width = window.innerWidth;
//   //   canvas.height = window.innerHeight;

//   //   // Redraw the existing content
//   //   context.strokeStyle = selectedColor;
//   //   context.lineWidth = brushWidth;
//   //   context.lineCap = 'round';
//   // }, [selectedColor, brushWidth]);

//   const startDrawing = (e) => {
//     setIsDrawing(true);
//     setPrevX(e.nativeEvent.offsetX);
//     setPrevY(e.nativeEvent.offsetY);
//   };

//   const draw = (e) => {
//     if (!isDrawing) return;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     ctx.strokeStyle = selectedColor;
//     ctx.lineWidth = brushWidth;
//     ctx.lineCap = 'round';
//     ctx.beginPath();
//     ctx.moveTo(prevX, prevY);
//     ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
//     ctx.stroke();
//     setPrevX(e.nativeEvent.offsetX);
//     setPrevY(e.nativeEvent.offsetY);
//   };

//   const finishDrawing = () => {
//     setIsDrawing(false);
//   };

//   const clearCanvas = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   };

//   const changeColor = (e) => {
//     setSelectedColor(e.target.value);
//   };

//   const changeBrushWidth = (e) => {
//     setBrushWidth(parseInt(e.target.value));
//   };

//   return (
//     <div className="container">
//       <section className="tools-board">
//         <canvas
//           ref={canvasRef}
//           onMouseDown={startDrawing}
//           onMouseMove={draw}
//           onMouseUp={finishDrawing}
//           onMouseOut={finishDrawing}
//           width={800}
//           height={600}
//         ></canvas>
//         <div className="row colors">
//           <label className="title">Color:</label>
//           <input type="color" value={selectedColor} onChange={changeColor} />
//         </div>
//         <div className="row">
//           <label className="title">Brush Size:</label>
//           <input
//             type="range"
//             min="1"
//             max="20"
//             value={brushWidth}
//             onChange={changeBrushWidth}
//           />
//         </div>
//         <div className="row">
//           <button onClick={clearCanvas}>Clear Canvas</button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

import React, { useRef, useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#000');
  const [brushWidth, setBrushWidth] = useState(5);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setPrevX(e.nativeEvent.offsetX);
    setPrevY(e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    setPrevX(e.nativeEvent.offsetX);
    setPrevY(e.nativeEvent.offsetY);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="container">
      <section className="tools-board">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={finishDrawing}
          onMouseOut={finishDrawing}
          width={800}
          height={600}
        ></canvas>
        <div className="row colors">
          <label className="title">Color:</label>
          <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
        </div>
        <div className="row">
          <label className="title">Brush Size:</label>
          <input
            type="range"
            min="1"
            max="20"
            value={brushWidth}
            onChange={(e) => setBrushWidth(parseInt(e.target.value))}
          />
        </div>
        <div className="row">
          <button onClick={clearCanvas}>Clear Canvas</button>
        </div>
      </section>
    </div>
  );
}

export default Home;


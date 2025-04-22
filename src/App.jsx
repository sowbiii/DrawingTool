import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";  
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Reg from './Reg';
import Log from './Log';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />  {/* Redirect "/" to "/home" */}

        <Route path="/register" element={<Reg />} ></Route>
        <Route path="/log" element={<Log/>} ></Route>
        <Route path="/home" element={<Home/>}></Route>
        
        </Routes>
    </BrowserRouter>
  );
}

export default App;

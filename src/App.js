import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Indexes from "./Indexes";
import Login from "./components/login";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/LMS" element={<Indexes/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Indexes from "./Indexes";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indexes/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

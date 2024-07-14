import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Lessions from './interfaces/lessions';
import Home from './interfaces/Home';
import Profile from './interfaces/profile';
import Quiz from './interfaces/quiz';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Lessions" element={<Lessions />} />
          <Route path="Home" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Quiz" element={<Quiz />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

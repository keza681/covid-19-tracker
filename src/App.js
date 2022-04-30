import { Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import Details from './components/Details';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>

  );
}

export default App;

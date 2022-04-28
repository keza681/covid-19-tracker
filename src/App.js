import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import Details from './components/Details';
import { getCountries } from './redux/reducers/covidReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCountries()(dispatch);
  }, []);
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

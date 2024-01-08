import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Galery from './pages/galery/Galery'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/portfolio/*" element={<Galery />} />
    </Routes>
  );
}

export default App;

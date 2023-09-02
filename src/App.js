import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';
import SharedPage from './SharedPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedPage />}>
          <Route index element={<Home />} />
          <Route path='/movies/:id' element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

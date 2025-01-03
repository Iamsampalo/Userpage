import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Details from './Details';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
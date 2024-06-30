import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing_page from './Landing_page';

const App = () => {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Landing_page />} />
      </Routes>
    </Router>
   </div>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WaitList from './Pages/WaitList';
import LandingPage from './Pages/LandingPage';

const App = () => {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path="/waitlist" element={ <WaitList/> } />
      </Routes>
    </Router>
   </div>
  );
};

export default App;

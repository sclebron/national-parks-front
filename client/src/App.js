import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.js';
import Park from './pages/park/park.js';
import Profile from './pages/profile/profile.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/national-parks-bucket-list/' element={<Homepage/>}/>
          <Route path='/Park' element={<Park/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

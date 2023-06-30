import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.js';
import Park from './pages/park/park.js';
import Profile from './pages/profile/profile.js';
import List from './pages/list/list.js';
import NavBar from './components/navBar/navBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/park' element={<Park/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/list' element={<List/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

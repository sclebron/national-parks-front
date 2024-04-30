import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.js';
import Park from './pages/park/park.js';
import Profile from './pages/profile/profile.js';
import List from './pages/list/list.js';
import npImg from './images/backgroundImgNP.jpg';
// import Header from './components/header/header.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${npImg})` }} className="backgroundImg">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/park' element={<Park/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/list' element={<List/>}/>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
// import { useEffect, useState } from 'react';
import npImg from './images/backgroundImgNP.jpg';
// import Header from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/components/header/header.js';
//instead of importing header, import individual National Parks, Login, and Sign Up buttons
// import Header from '/components/header/header.js';
import './homepage.css';

function Homepage () {

    return (
        <div className="homeContainer">
            <div className="home">
                <div style={{ backgroundImage: `url(${npImg})` }} className="backgroundImg">
                Welcome To Your National Parks Bucket List!
                </div>
            </div>
        </div>
    )
}

export default Homepage;
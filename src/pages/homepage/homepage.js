import React from 'react';
import navBar from './navBar.js';
import './homepage.css';

function Homepage () {
    return (
        <div className="homeContainer">
            <navBar />
            <div className="home">
                <div style={{ backgroundImage:  }} className="backgroundImg">
                Welcome To Your National Parks Bucket List!
                </div>
            </div>
        </div>
    )
}

export default Homepage;
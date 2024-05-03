import React from 'react';
import peanutTeton from './images/peanutTeton.png';
import './homepage.css';

function Homepage () {

    return (
        <div className="homeContainer">
            <div className="home">
                <div>
                    <h1 className="hometext">Welcome To Your National Parks Bucket List</h1>
                    <div classname="home-menu">Let The Adventure Begin!</div>
                    <div style={{ backgroundImage: `url(${peanutTeton})` }}className="pic-1"></div>
                    <div className="pic-2"></div>
                    <div className="pic-3"></div>
                    <div className="pic-4"></div>
                    <div className="pic-5"></div>
                    <div className="pic-6"></div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
import React from 'react';
import peanutTeton from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/peanutTeton.png';
import './homepage.css';

function Homepage () {

    return (
        <div className="homeContainer">
            <div className="home">
                <div>
                    <h1 className="hometext">Welcome To Your National Parks Bucket List</h1>
                    <div classname="home-menu">Let The Adventure Begin!</div>
                    <img src={peanutTeton} className="pic-1"></img>
                    <img className="pic-2"></img>
                    <img className="pic-3"></img>
                    <img className="pic-4"></img>
                    <img className="pic-5"></img>
                    <img className="pic-6"></img>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
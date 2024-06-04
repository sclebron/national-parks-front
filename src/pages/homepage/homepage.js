import React, { useState } from 'react';
import peanutTeton from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/peanutTeton.png';
import bcog from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/bcog.png';
import moose from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/moose.png';
import panorama from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/panorama.png';
import rockies from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/rockies.png';
import tetons from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/tetons.png';
import './homepage.css';
import { Modal } from 'react-bootstrap';

function Homepage () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    return (
        <div className="home">
            <div className="hometext">Welcome To Your National Parks Bucket List</div>
            <div className="menu-container">
                <div classname="trigger" onClick={() => setIsMenuOpen(!isMenuOpen)}>Let The Adventure Begin!</div>
                {isMenuOpen && (
                    <div className="menu">
                        <button className="nav-btn" onClick={() => setIsLoginOpen(!isLoginOpen)}>Login</button>
                        {isLoginOpen && (
                            <div className="login-modal">
                                <h1>Login</h1>
                            </div>
                        )}
                        <br/>
                        <button className="nav-btn" onClick={() => setIsSignUpOpen(!isSignUpOpen)}>Sign Up</button>
                        {isSignUpOpen && (
                            <div className="signup-modal">
                                <h1>Sign Up</h1>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="home-pics">
                <img src={peanutTeton} className="pic-1"></img>
                <img src={rockies} className="pic-2"></img>
                <img src={panorama} className="pic-3"></img>
                <img src={bcog} className="pic-4"></img>
                <img src={moose} className="pic-5"></img>
                <img src={tetons} className="pic-6"></img>
            </div>
        </div>
    )
}

export default Homepage;
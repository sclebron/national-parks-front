import React from 'react';
// import Modal from './login/loginModal.js';
import Modal from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/components/login/loginModal.js';
import './homepage.css';

function Homepage () {

    return (
        <div className="homeContainer">
            <div className="home">
                <div>
                    <h1 className="hometext">Welcome To Your National Parks Bucket List</h1>
                    <div classname="home-menu">Let The Adventure Begin!</div>
                    {/* <Modal className="login-modal"></Modal> */}
                    <div className="pic-1"></div>
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
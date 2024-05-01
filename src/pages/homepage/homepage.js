import React from 'react';
// import Modal from './login/loginModal.js';
import Modal from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/components/login/loginModal.js';
import './homepage.css';

function Homepage () {

    return (
        <div className="homeContainer">
            <div className="home">
                <div>
                    <div className="hometext">Welcome To Your National Parks Bucket List</div>
                    <Modal className="login-modal"></Modal>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
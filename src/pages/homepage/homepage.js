import React from 'react';
// import npImg from './images/backgroundImgNP.jpg';
//instead of importing header, import individual National Parks, Login, and Sign Up buttons
import './homepage.css';

function Homepage () {

    return (
        <div className="homeContainer">
            <div className="home">
                <div>
                    <div className="hometext">Welcome To Your National Parks Bucket List</div>
                    <div className="login-modal"></div>
                </div>
            </div>
        </div>
    )
}

//might need to change the div with the background image and move that background image up a div to the one with the className "home"

export default Homepage;
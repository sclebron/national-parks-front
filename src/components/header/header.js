import React from 'react';
import NavBar from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/components/navBar/navBar.js';
import Login from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/components/login/login.js';
import SignUp from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/components/signUp/signUp.js';

function Header() {
    return (
        <div className="header" style={{display: 'flex'}}>
            <NavBar/>
            <Login/>
            <SignUp/>
        </div>
    )
}

export default Header;
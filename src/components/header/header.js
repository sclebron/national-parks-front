import React from 'react';
import NavBar from './navBar.js';
import Login from './login.js';
import SignUp from './signup.js';

function Header() {
    return (
        <div className="header">
            <NavBar />
            <Login />
            <SignUp />
        </div>
    )
}

export default Header;
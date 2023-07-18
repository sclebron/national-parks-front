import React, { useState }from 'react';
import './login.css';
import { MdClose } from 'react-icons/md';

function Login() {



    return (
        <div className="login">
            <button className="loginBtn">Login</button>
            <div className="loginModal">
                <div className="modalBorder"></div>
                <div className="modalForm">
                    <MdClose size={25} className="closeIcon" />
                    <div className="modalContent">
                        <div className="email"></div>
                        <div className="password"></div>
                        <button className="loginModalBtn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
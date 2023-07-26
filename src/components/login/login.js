import React, { useState } from 'react';
import './login.css';
import Modal from './loginModal.js';

function Login() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="login">
            <button className="loginBtn" onClick={() => setIsOpen(true)}>Login</button>
            <Modal className="loginModal" open={isOpen} onClose={() => setIsOpen(false)}>
                <br></br>
                <div className="loginModalHeader">Login</div>
                <br></br>
                <div>Username:</div>
                <input></input>
                <br></br>
                <div>Password:</div>
                <input></input>
                <br></br>
                <button className="loginModalBtn">Login</button>
            </Modal>
        </div>
    )
}

export default Login;
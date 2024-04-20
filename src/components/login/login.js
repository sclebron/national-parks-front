import React, { useState } from 'react';
import './login.css';
import Modal from './loginModal.js';

function Login() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        // <div className="login">
        //     <button className="loginBtn" onClick={() => setIsOpen(true)}>Login</button>
        //     <Modal className="loginModal" open={isOpen} onClose={() => setIsOpen(false)}>
        //         <br></br>
        //         <div className="loginModalHeader">Login</div>
        //         <br></br>
        //         <input placeholder="Username" className="userInput"></input>
        //         <br></br>
        //         <input placeholder="Password" className="passwordInput"></input>
        //         <br></br>
        //         <button className="loginModalBtn">Login</button>
        //     </Modal>
        // </div>
        <div className="login">
                <Modal className="loginModal">
                    <br></br>
                    <div className="loginModalHeader">Login</div>
                    <br></br>
                    <input placeholder="Username" className="userInput"></input>
                    <br></br>
                    <input placeholder="Password" className="passwordInput"></input>
                    <br></br>
                    <button className="loginModalBtn">Login</button>
                </Modal>
        </div>
    )
}

export default Login;
import React, { useState }from 'react';
import './login.css';
import { MdClose } from 'react-icons/md';

function Login() {

    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="login">
            <div className="modalBtn">
                <button className="loginBtn" onClick={() => setShowPopup(!showPopup)}>Login</button>
            </div>
            <div className="loginModal" style={{visbility: showPopup? 'visibile' : 'hidden'}}>
                <div className="modalBorder"></div>
                <div className="modalForm">
                    <MdClose size={25} className="closeIcon" onClick={() => setShowPopup(false)} />
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
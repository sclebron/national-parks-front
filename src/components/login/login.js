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
            <div className="loginModal">
                
            </div>
        </div>
    )
}

export default Login;
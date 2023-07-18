import React, { useState }from 'react';
import './login.css';
import { MdClose } from 'react-icons/md';

function Login() {

    const [showPopup, setShowPopup] = useState(false);

    const toggleMOdal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <div className="login">
            <button className="loginBtn" onClick={toggleModal}>Login</button>
            <div className="loginModal" style={{visbility: showPopup ? 'visibile' : 'hidden'}}>
                <div className="modalBorder"></div>
                <div className="modalForm">
                    <MdClose size={25} className="closeIcon" onClick={toggleModal} />
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
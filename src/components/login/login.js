import React, { useState } from 'react';
import './login.css';
import { MdClose } from 'react-icons/md';
import Modal from './loginModal.js';

function Login() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="login">
            <button className="loginBtn" onClick={() => setIsOpen(true)}>Login</button>
            <Modal open={isOpen}>
                Fancy Modal
            </Modal>
        </div>
    )
}

export default Login;
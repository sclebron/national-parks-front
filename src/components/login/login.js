import React from 'react';
import './login.css';
import { MdClose } from 'react-icons/md';
import Modal from './loginModal.js';

function Login() {



    return (
        <div className="login">
            <button className="loginBtn">Login</button>
            <Modal>
                Fancy Modal
            </Modal>
        </div>
    )
}

export default Login;
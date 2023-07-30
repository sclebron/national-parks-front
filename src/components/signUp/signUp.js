import React, { useState } from 'react';
import './signUp.css';
import Modal from './signUpModal.js';

function SignUp() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="signup">
            <button className="signupBtn" onClick={() => setIsOpen(true)}>Sign Up</button>
            <Modal className="signupModal" open={isOpen} onClose={() => setIsOpen(false)}>
                <br></br>
                <div className="signupModalHeader">Create Account</div>
                <br></br>
                <div>Username:</div>
                <input></input>
                <br></br>
                <div>Password:</div>
                <input></input>
                <br></br>
                <div>Confirm Password:</div>
                <input></input>
                <br></br>
                <br></br>
                <button className="signupModalBtn">Sign Up</button>
            </Modal>
        </div>
    )
}

export default SignUp;
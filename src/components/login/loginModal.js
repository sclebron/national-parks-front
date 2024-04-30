import React from 'react'
// import { MdClose } from 'react-icons/md';
import './loginModal.css';

function Modal() {

    return (
        <div className="modalContainer">
            <div className="modal">
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
            </div>
        </div>
    )
}

export default Modal;
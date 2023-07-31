import React from 'react'
import { MdClose } from 'react-icons/md';
import './loginModal.css';

function Modal({ open, children, onClose }) {
    if (!open) return null

    return (
        <div className="modalContainer">
            <div className="modal">
                <MdClose className="closeBtn" onClick={onClose}>Close Modal</MdClose>
            {children}
            </div>
        </div>
    )
}

export default Modal;
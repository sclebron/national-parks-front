import React from 'react'
import { MdClose } from 'react-icons/md';
import './loginModal.css';

function Modal({ open, children, onClose }) {
    if (!open) return null

    return (
        <div className="modal">
            <MdClose className="closeBtn" onClick={onClose}>Close Modal</MdClose>
            {children}
        </div>
    )
}

export default Modal;

//make it so login button will close when clicked if modal is open
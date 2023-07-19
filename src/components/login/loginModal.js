import React from 'react'

function Modal({ open, children, onClose }) {
    if (!open) return null

    return (
        <div>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </div>
    )
}

export default Modal;
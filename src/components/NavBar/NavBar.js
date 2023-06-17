import React from 'react';
import { useState } from 'react';
import Dropdown from './components/Dropdown/Dropdown.js';
import Button from './components/Button/Button.js';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const changeClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false)
    }

    return (
        <section>
            <nav className="navbar">
                
            </nav>
        </section>
    )
}
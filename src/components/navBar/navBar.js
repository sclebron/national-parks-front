import React from 'react';
import './navBar.css';

function NavBar() {
    return (
    <div className="menu-container">
        <div classname="menu-trigger">National Parks</div>
        <div className="dropdown-menu">
            <h3>The Kiet<br/><span>Website Designer</span></h3>
            <ul>
                <DropdownItem/>
            </ul>
        </div>
    </div>
    )
}

function DropdownItem() {
    return(
        <li className="dropdownItem">
            
        </li>
    );
}

export default NavBar;
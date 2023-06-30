import React, { useState, useEffect } from 'react';
import './navBar.css';

function NavBar() {

    const [open, setOpen ] = useState(false);

    useEffect()

    return (
    <div className="menu-container">
        <div classname="menu-trigger" onClick={()=>{setOpen(!open)}}>National Parks</div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <ul>
                <DropdownItem text = {"Acadia National Park"}/>
                <DropdownItem text={"Arches National Park"}/>
                <DropdownItem text={"Badlands National Park"}/>
                <DropdownItem text={"Big Bend National Park"}/>
                <DropdownItem text={"Biscayne National Park"}/>
                <DropdownItem text={"Black Canyon of the Gunnison National Park"}/>
            </ul>
        </div>
    </div>
    )
}

function DropdownItem() {
    return(
        <li className="dropdownItem">
            <a>{props.text}</a>
        </li>
    );
}

export default NavBar;
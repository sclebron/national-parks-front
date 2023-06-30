import React, { useState } from 'react';
// import { UNSAFE_mapRouteProperties } from 'react-router';
import './navBar.css';

function NavBar() {

    const [open, setOpen ] = useState(false);

    return (
    <div className="menu-container">
        <div classname="menu-trigger" onClick={()=>{setOpen(!open)}}>National Parks</div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <h3>The Kiet<br/><span>Website Designer</span></h3>
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
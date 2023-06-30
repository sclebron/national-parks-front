import React from 'react';
import { UNSAFE_mapRouteProperties } from 'react-router';
import './navBar.css';

function NavBar() {
    return (
    <div className="menu-container">
        <div classname="menu-trigger">National Parks</div>
        <div className="dropdown-menu">
            <h3>The Kiet<br/><span>Website Designer</span></h3>
            <ul>
                <DropdownItem img = {user} text = {"My Profile"}/>
            </ul>
        </div>
    </div>
    )
}

function DropdownItem() {
    return(
        <li className="dropdownItem">
            <img src={props.img}></img>
            <a>{props.text}</a>
        </li>
    );
}

export default NavBar;
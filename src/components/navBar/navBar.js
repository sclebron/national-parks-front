import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './navBar.css';

function NavBar() {

    const navigate = useNavigate();

    const navigateToPark = () => {
        navigate('/park')
    }

    const [open, setOpen ] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler)

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
    <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>National Parks</div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <Link to="/park/">
                <button className="navBtn" id="homepage">
                    Acadia National Park
                </button>
            </Link>
            {/* <ul>
                <DropdownItem text = {"Acadia National Park"} onClick={navigateToPark}/>
                <DropdownItem text={"Arches National Park"}/>
                <DropdownItem text={"Badlands National Park"}/>
                <DropdownItem text={"Big Bend National Park"}/>
                <DropdownItem text={"Biscayne National Park"}/>
                <DropdownItem text={"Black Canyon of the Gunnison National Park"}/>
            </ul> */}
        </div>
    </div>
    );
}

function DropdownItem(props) {
    return(
        <li className="dropdownItem">
            <a>{props.text}</a>
        </li>
    );
}

export default NavBar;
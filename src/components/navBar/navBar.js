import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Acadia National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Arches National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Badlands National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Big Bend National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Biscayne National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Black Canyon of the Gunnison National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Bryce Canyon National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Canyonlands National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Capitol Reef National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Carlsbad Caverns National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Channel Islands National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Congaree National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Crater Lake National Park
                </button>
            </Link>
        </div>
    </div>
    );
}

export default NavBar;
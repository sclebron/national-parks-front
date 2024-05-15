import React, { useState, useEffect, useRef } from 'react';
import peanutTeton from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/peanutTeton.png';
import bcog from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/bcog.png';
import elk from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/elk.png';
import moose from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/moose.png';
import panorama from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/panorama.png';
import rockies from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/rockies.png';
import tetons from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/images/tetons.png';
import './homepage.css';

function Homepage () {

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
        <div className="home">
            <div className="hometext">Welcome To Your National Parks Bucket List</div>
            <div className="menu-container" ref={menuRef}>
                <div classname="home-menu" onClick={()=>{setOpen(!open)}}>Let The Adventure Begin!</div>
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <img src={peanutTeton} className="pic-1"></img>
            <img src={rockies} className="pic-2"></img>
            <img src={panorama} className="pic-3"></img>
            {/* <img src={elk} className="pic-4"></img> */}
            <img src={bcog} className="pic-4"></img>
            <img src={moose} className="pic-5"></img>
            <img src={tetons} className="pic-6"></img>
        </div>
    )
}

export default Homepage;
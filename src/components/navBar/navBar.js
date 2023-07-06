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
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Cuyahoga Valley National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Death Valley National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Denali National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Dry Tortugas National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Everglades National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Gates of the Arctic National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Gateway Arch National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Glacier National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Glacier Bay National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Grand Canyon National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Grand Teton National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Great Basin National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Great Sand Dunes National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Great Smoky Mountains National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Guadalupe National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Haleakala National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Hawaii Volcanoes National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Hot Springs National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Indiana Dunes National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Isle Royale National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Joshua Tree National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Katmai National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Kenai Fjords National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Kings Canyon National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Kobuk Valley National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Lake Clarke National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Lassen Volcanic National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Mammoth Cave National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Mesa Verde National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Mount Rainier National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    National Park of American Samoa
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    New River Gorge National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    North Cascades National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Olympic National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Petrified Forest National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Pinnacles National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Redwood National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Rocky Mountain National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Saguaro National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Sequoia National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Shenandoah National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Theodore Roosevelt National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Virgin Islands National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Voyageurs National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    White Sands National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Wind Cave National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Wrangell-St. Elias National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Yellowstone National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Yosemite National Park
                </button>
            </Link>
            <Link to="/park/">
                <button className="navBtn" onClick={()=>{setOpen(false)}}>
                    Zion National Park
                </button>
            </Link>
        </div>
    </div>
    );
}

export default NavBar;
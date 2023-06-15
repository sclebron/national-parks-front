import React from 'react';
// import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import gtnp from './images/gtnp.jpg';
import './homepage.css';

function Homepage () {
    // const [image, setImage] = useState(1);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         change();
    //     }, 10000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [image]);

    // const change = () => {
    //     if (image === 5) {
    //         setImage(1);
    //         return;
    //     }

    //     setImage((prev) => prev + 1);
    // }

    //     const returnImageUrl = () => {
    //         switch(image) {
    //             case 1: 
    //                 return './images/rmnp.jpg';
    //             case 2: 
    //                 return './images/gtnp.jpg';
    //             case 3: 
    //                 return './images/ynp.jpg';
    //             case 4: 
    //                 return './images/gsdnp.jpg';
    //             case 5: 
    //                 return './images/bcgnp.jp';
    //         }
    //     }

    return (
        <div className="homeContainer">
            <Navbar bg="dark" expand="lg" className="navbar">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar>
            <div className="home">
                <div style={{ backgroundImage: `url(${gtnp})` }} className="backgroundImg">
                Welcome To Your National Parks Bucket List!
                </div>
            </div>
        </div>
    )
}

export default Homepage;
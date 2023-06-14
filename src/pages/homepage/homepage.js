import React from 'react';
import { useEffect, useState } from 'react';
import navBar from './navBar.js';
import './homepage.css';



function Homepage () {
    const [image, setImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            change();
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [photo]);

    const change = () => {
        if (image === 5) {
            setImage(1);
            return;
        }

        setPhoto((prev) => prev + 1);
    }

        const returnImageUrl = () => {
            switch(image) {
                case 1: 
                    return './images/img1.jpg';
                case 2: 
                    return './images/img2.jpg';
                case 3: 
                    return './images/img3.jpg';
                case 4: 
                    return './images/img4.jpg';
                case 5: 
                    return './images/img5.jp';
            }
        }

    return (
        <div className="homeContainer">
            <navBar />
            <div className="home">
                <div style={{ backgroundImage: `url(${returnImageUrl()})` }} className="backgroundImg">
                Welcome To Your National Parks Bucket List!
                </div>
            </div>
        </div>
    )
}

export default Homepage;
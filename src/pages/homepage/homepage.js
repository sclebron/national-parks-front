import React from 'react';
// import { useEffect, useState } from 'react';
import gtnp from './images/gtnp.jpg';
// import Header from '/Users/sophielebron/Desktop/coding-projects/national-parks-front/src/components/header/header.js';
import Header from './src/components/header/header.js';
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
            <Header />
            <div className="home">
                <div style={{ backgroundImage: `url(${gtnp})` }} className="backgroundImg">
                Welcome To Your National Parks Bucket List!
                </div>
            </div>
        </div>
    )
}

export default Homepage;
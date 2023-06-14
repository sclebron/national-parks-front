import React from 'react';
import { useEffect, useState } from 'react';
import navBar from './components/navBar/navBar.js'


function Homepage () {
    const [image, setImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            change();
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [image]);

    const change = () => {
        if (image === 5) {
            setImage(1);
            return;
        }

        setImage((prev) => prev + 1);
    }

        const returnImageUrl = () => {
            switch(image) {
                case 1: 
                    return './images/rmnp.jpg';
                case 2: 
                    return './images/gtnp.jpg';
                case 3: 
                    return './images/ynp.jpg';
                case 4: 
                    return './images/gsdnp.jpg';
                case 5: 
                    return './images/bcgnp.jp';
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
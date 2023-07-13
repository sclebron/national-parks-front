import React, { useState }from 'react';
import './login.css';

function Login() {

    const loginModal = () => {
        const [isShowing, setIsShowing] = useState(false)

        function toggle() {
            setIsShowing(!isShowing)
        }
    }

    return (
        <div className="login">
            <button className="loginBtn">Login</button>
        </div>
    )
}

export default Login;
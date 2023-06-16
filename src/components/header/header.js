import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css';

function Header() {
    return (
        <div className="header">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                National Parks
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

export default Header;
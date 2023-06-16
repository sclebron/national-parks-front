import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './header.css';

function Header() {
    return (
        <div className="header">
            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.ItemText>National Parks</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Header;
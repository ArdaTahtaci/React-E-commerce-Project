import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';


function CategoryDropdown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"]

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
                <DropdownToggle className='btn-info' caret>Categories</DropdownToggle>
                <DropdownMenu >
                    {categories.map((category, index) => {
                        return (
                            <DropdownItem key={index}><Link className='dropdown-item' to={"/category/" + category}>{category}</Link></DropdownItem>
                        )
                    })}


                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default CategoryDropdown;
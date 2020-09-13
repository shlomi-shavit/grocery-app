
import React from 'react';

// Styles
import './header.module.scss';

// Components
import Menu from './menu/menu';

const Header = () => {

    return (
        <header>
            <Menu />
            <h2>Grocery List</h2>
        </header>
    );
};

export default Header;
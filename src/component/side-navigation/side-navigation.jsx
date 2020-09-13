import React from 'react';
import { NavLink } from "react-router-dom";

// Styles
import classes from './side-navigation.module.scss';

const SideNavigation = () => {

    return (
        <div className={classes.side_navigation}>
            <NavLink exact={true} activeClassName={classes.active} to='/orders'>Orders</NavLink>
            <NavLink activeClassName={classes.active} to='/new-order'>New order</NavLink>
        </div>
    );
};

export default SideNavigation;

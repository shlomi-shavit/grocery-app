import React from 'react';

// Styles
import classes from './selected-page.module.scss';

// Components
import Routes from '../routing/routes';

// import Orders from '../grocery/orders/orders';
// import NewOrder from '../grocery/new-order/new-order';

const SelectedPage = () => {

    return (
        <div className={classes.page_container}>
            <Routes />
        </div>
    );
};

export default SelectedPage;

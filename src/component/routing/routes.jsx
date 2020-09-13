import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Orders from '../orders/orders';
import NewOrder from '../new-order/new-order';

const Routes = () => {
    return (
        <Switch>

            <Route exact path="/">
                select...
                    </Route>
            <Route path="/orders">
                <Orders />
            </Route>

            <Route path="/new-order">
                <NewOrder />
            </Route>

        </Switch>
    );
};

export default Routes;

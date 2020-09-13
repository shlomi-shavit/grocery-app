import React, { useState } from 'react';

// Styles
import classes from './new-order.module.scss';

// Json
import GroceryListData from '../../json/grocery-list.json';

// SVG icons
import searchIcon from '../../icons/search-icon.svg';

// Components
// import OfferPreview from '../../components/offer-preview/offer-preview';
// import BrokerOffer from '../../components/broker-offer/broker-offer';

const NewOrder = () => {

    const [setItems, setItemsState] = useState([]);
    const [setTotalCost, setTotalCostState] = useState([]);

    const addItem = (item) => {
        // Adiing item
        if (!setItems.includes(item[0])) {
            setItemsState([...setItems, item[0]]);
            setTotalCostState([...setTotalCost, parseInt(item[1])])
        }
        // Remove item
        else {
            removeItem(item[0])
        }
    }

    const removeItem = (item) => {
        const itemIndex = setItems.indexOf(item);
        setItems.splice(itemIndex, 1);
        setTotalCost.splice(itemIndex, 1);
        setItemsState([...setItems]);
        setTotalCostState([...setTotalCost]);
    }

    const totalCost = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const summary = setTotalCost.length > 0 ? setTotalCost.reduce(reducer) + '$' : null;
        return summary
    }

    const GroceryListEntries = Object.entries(GroceryListData)
    const GroceryList = GroceryListEntries.map(item => {
        return (
            <li key={item[0]}>
                <label className={classes.container}>
                    <input onClick={() => addItem(item)} type="checkbox" name="name" checked={setItems.includes(item[0]) ? true : false} />
                    <span>{item[0]}</span> {item[1]}$
                    <div className={classes.checkmark}></div>
                </label>
            </li>
        )
    })

    const selectedItemsChart = setItems.map(item => {
        return (
            <div key={'selected' + item} className={classes.selected_item}>
                <span>{item}</span>
                <span>{GroceryListData[item]}$</span>
                <div className={classes.delete_btn} onClick={() => removeItem(item)}></div>
            </div>
        )
    })

    return (
        <div>

            <h1>New Order</h1>

            <div className={classes.new_order_container}>
                <div className={classes.box_container}>
                    <div className={classes.top_wrapper}>
                        <h3>Add item</h3>

                        <div className={classes.search_container}>
                            <img className={classes.search_icon} src={searchIcon} alt="React Logo" />
                            <input type='text' placeholder='Search' />
                        </div>
                    </div>

                    <div className={classes.center_wrapper}>
                        <ul className={classes.grocery_list}>
                            {GroceryList}
                        </ul>
                    </div>

                    {/*
                    <div className={classes.bottom_wrapper}>
                        <button>+ Add to Chart</button>
                    </div>
                    */}
                </div>


                <div className={classes.box_container}>
                    <div className={classes.top_wrapper}>
                        <h3>Chart</h3>
                    </div>

                    <div className={classes.center_wrapper}>
                        <div className={classes.selected_items_container}>
                            {selectedItemsChart}
                        </div>
                    </div>

                    <div className={classes.bottom_wrapper}>
                        <div className={classes.summary}>Total Cost: <span className={classes.price}>{totalCost()}</span></div>
                        <button className={classes.place_order}>PLACE ORDER</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewOrder;

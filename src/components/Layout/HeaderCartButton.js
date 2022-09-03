import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import {Fragment, useEffect, useContext, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
    const {items} = useContext(CartContext);

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);


    const btnClasses=`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(()=>{setBtnIsHighlighted(false)},300);

        return () =>{
            clearTimeout(timer);
        }
    },[items]);

    return (
        <Fragment>
            <button className={btnClasses}
                    onClick={props.onClick}>
                <span>
                 <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}> {numberOfCartItems} </span>
            </button>
        </Fragment>
    )
};
export default HeaderCartButton;
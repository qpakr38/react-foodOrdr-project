import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import {Fragment, useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const carCtx = useContext(CartContext);

    const numberOfCartItems = carCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    return (
        <Fragment>
            <button className={classes.button}
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
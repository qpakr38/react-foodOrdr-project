import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import {Fragment} from "react";

const HeaderCartButton = (props) => {
    return (
        <Fragment>
            <button className={classes.button}
                    onClick={props.onClick}>
                <span>
                 <CartIcon/>
                </span>
                    <span>Your Cart</span>
                    <span className={classes.badge}> 3 </span>
            </button>
        </Fragment>
    )
};
export default HeaderCartButton;
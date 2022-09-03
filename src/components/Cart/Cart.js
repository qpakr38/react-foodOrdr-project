import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems =
        <ul className={classes['cart-items']}>
            {[{
                id: 'c1',
                name: 'Sushi',
                amount: 2,
                price: 12.99
            }].map((item) => {
                return (
                    <li key={item.id}>{item.name}</li>
                )
            })}
        </ul>;
    return (
        <Modal className={props.className}
               onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes['button--alt']}>Order</button>
            </div>
        </Modal>

    )
};
export default Cart;
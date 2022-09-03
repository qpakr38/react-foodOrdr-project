import {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const cartReducer = (state, action) => {
    if (action.type === ADD) {
        const existingCartItemIndex = state.items.findIndex(
            (item) =>  item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else {
            updatedItems=state.items.concat(action.item);
        }
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return ({
            items: updatedItems,
            totalAmount: updateTotalAmount
        });
    }else if(action.type === REMOVE){
        let updatedItems;

        const existingCartItemIndex = state.items.findIndex(
            (item) =>  item.id === action.id
        );
        let updatedItem = state.items[existingCartItemIndex];
        if(updatedItem.amount===1){
            updatedItems=state.items.filter((item)=>item.id!==action.id);
        }else{
            updatedItem.amount-=1;
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        const updateTotalAmount = state.totalAmount - updatedItem.price;
        return ({
            items: updatedItems,
            totalAmount: updateTotalAmount
        });
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: ADD, item: item});
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: REMOVE, id: id});
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
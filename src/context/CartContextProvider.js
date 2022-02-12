import React, { useReducer, createContext } from 'react';


const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter , total}
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
            ...state,
            selectedItems: [...state.selectedItems],
            ...sumItems(state.selectedItems),
            checkOut: false
        }
        case "REMOVE_ITEMS":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkOut: true
            };
        case "CLEAR":
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkOut: false
            }
        default:
            return state
}
}

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
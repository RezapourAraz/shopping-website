import React, { useContext } from 'react';
// Context
import { CartContext } from '../context/CartContextProvider';
// Styles
import styles from './ItemCart.module.css';
// Functions
import { splitTitle } from '../helper/functions';
// Icons
import trash from '../assets/icons/trash.svg'

const ItemCart = ({data}) => {

    const { dispatch } = useContext(CartContext)
    const {image, title, quantity, price, category} = data;

    return (
        <div className={styles.container}>
            <img className={styles.images} src={image} alt={title} />
            <div className={styles.titles}>
                <h4>{splitTitle(title)}</h4>
                <span>{category}</span>
            </div>
            <div className={styles.btns}>
                {
                quantity > 1 && <button className={styles.decrease} onClick={() => dispatch({ type: "DECREASE", payload: data})} >-</button>
                }
                {
                quantity === 1 && <button className={styles.remove} onClick={() => dispatch({ type: "REMOVE_ITEMS", payload: data})}><img src={trash} alt="tash icon" /></button>
                }
                <span className={styles.span}>{quantity}</span>
                {
                <button className={styles.increase} onClick={() => dispatch({ type: "INCREASE", payload: data })}>+</button>
                }
            </div>
            <p className={styles.p}>$ {price}</p>
        </div>
    );
};

export default ItemCart;
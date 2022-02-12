import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { CartContext } from '../../context/CartContextProvider';
// Styles
import styles from './Cart.module.css';
// Functions
import { splitTitle, isInCart, quantityCount, ratingStar } from '../../helper/functions';
// Icons
import trash from '../../assets/icons/trash.svg';


const Cart = ({productData}) => {

    const { state, dispatch } = useContext(CartContext);

    const { id,image, title, price, rating } = productData;


    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.cartContainer}>
                <div className={styles.title}>
                    <h4>{splitTitle(title)}</h4>
                </div>
                <div className={styles.price}>
                    <p>$ {price}</p>
                    <div className={styles.star}>
                    {ratingStar(rating.rate)}
                    </div>
                </div>
                <div className={styles.links}>
                    <Link to={`/products/${id}`}>Detailes</Link>
                </div>
                <div className={styles.btns}>
                    {
                        quantityCount(state, id) > 1 && <button className={styles.decrease} onClick={() => dispatch({ type: "DECREASE", payload: productData})} >-</button>
                    }
                    
                    {
                        quantityCount(state, id) === 1 && <button className={styles.remove} onClick={() => dispatch({ type: "REMOVE_ITEMS", payload: productData})}><img src={trash} alt="tash icon" /></button>
                    }
                    {
                        quantityCount(state, id) > 0 && <span className={styles.span}>{quantityCount(state, id)}</span>
                    }
                    {
                        isInCart(state, id) ? 
                        <button className={styles.increase} onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                        <button className={styles.add} onClick={() => dispatch({ type: "ADD_ITEM", payload: productData})}>ADD TO CART</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
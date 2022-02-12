import React, { useContext } from 'react';
// Context
import { CartContext } from '../context/CartContextProvider';
// Functions
import { quantityCount, isInCart } from '../helper/functions';
// Icons
import trash from '../assets/icons/trash.svg';
// Styles
import styles from './ProductDetaile.module.css';

const ProductDetaile = ({productData}) => {

    const { state, dispatch } = useContext(CartContext);
    const {id ,image, title, price, description, category } = productData;

    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.detailes}>
                <h2>{title}</h2>
                <h3>$ {price}</h3>
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
                <div className={styles.category}>
                    <span>Category</span>
                    <p>{category}</p>
                </div>
                <div className={styles.description}>
                    <p>Description</p>
                    <span>{description}</span>
                </div>
            </div>
        </section>
    );
};

export default ProductDetaile;
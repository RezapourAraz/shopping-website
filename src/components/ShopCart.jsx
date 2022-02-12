import React, { useContext } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
// Components
import ItemCart from './ItemCart';
//Context 
import { CartContext } from '../context/CartContextProvider';
// Styles
import styles from './ShopCart.module.css';
import Footer from './Footer';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <>
        <Header />
        <section className={styles.container}>
            <div className={styles.items}>
                <div className={styles.titles}>
                    <h3>Shopping Cart</h3>
                    <p>{state.itemsCounter} items</p>
                </div>
                <div>
                    {
                    state.selectedItems.map(item => <ItemCart key={item.id} data={item} />)
                    }
                </div>
                    {
                        state.checkOut &&
                        <div className={styles.checkoutText}>
                            <p>You Check out Succecfull</p>
                        </div> 
                    }
            </div>
            <div className={styles.summary}>
                <div className={styles.sumContainer}>
                    <h3>Summary</h3>
                </div>
                <div className={styles.itemsCount}>
                    <h5>Total Items</h5>
                    <span>{state.itemsCounter}</span>
                </div>
                <div className={styles.total}>
                    <h5>Total </h5>
                    <p>$ {state.total}</p>
                </div>
                <div className={styles.btns}>
                    {
                    <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                    }
                    {
                    state.selectedItems.length > 0 && <button className={styles.chekout} onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</button>
                    }
                </div>
                <Link to='/' >Back To Shop</Link>
            </div>
        </section>
        <Footer />   
        </>
    );
};

export default ShopCart;
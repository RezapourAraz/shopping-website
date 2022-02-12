import React, { useContext } from 'react';
// Context
import { ProductContext } from '../context/ProductContextProvider';
// Components
import Cart from './shared/Cart';
// Styles
import styles from './Popular.module.css';
import { CategoryFind } from '../helper/functions';


const ForMens = () => {

    const products = useContext(ProductContext);
    const category = CategoryFind(products);

    return (
        <section className={styles.container}>
                <div className={styles.title}>
                    <h4>For Mens</h4>
                </div>
                <div className={styles.cardContainer}>
                    {
                        category.mens.map(product => <Cart key={product.id} productData={product} />)
                    }
                </div>
        </section>
    );
};

export default ForMens;
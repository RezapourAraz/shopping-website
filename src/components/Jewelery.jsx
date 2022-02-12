import React, { useContext } from 'react';
// Context
import { ProductContext } from '../context/ProductContextProvider';
// Components
import Cart from './shared/Cart';
// Styles
import styles from './Popular.module.css';
import { CategoryFind } from '../helper/functions';


const Jewelery = () => {

    const products = useContext(ProductContext);
    const category = CategoryFind(products);

    return (
        <section className={styles.container}>
                <div className={styles.title}>
                    <h4>Jewelery</h4>
                </div>
                <div className={styles.cardContainer}>
                    {
                        category.jewelery.map(product => <Cart key={product.id} productData={product} />)
                    }
                </div>
        </section>
    );
};

export default Jewelery;
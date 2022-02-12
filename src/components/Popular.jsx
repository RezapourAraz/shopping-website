import React, { useContext } from 'react';
// Components
import Cart from './shared/Cart';
// Context
import { ProductContext } from '../context/ProductContextProvider';
// functions
import { getPopular } from '../helper/functions'; 
// Styles
import styles from './Popular.module.css';

const Popular = () => {

    const products = useContext(ProductContext);
    const data = getPopular(products);

    return (
        <section className={styles.container}>
                <div className={styles.title}>
                    <h4>Popular Products</h4>
                </div>
                <div className={styles.cardContainer}>
                    {
                        data.map(product => <Cart key={product.id} productData={product} />)
                    }
                </div>
        </section>
    );
};

export default Popular;
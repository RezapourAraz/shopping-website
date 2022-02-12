import React, {useContext} from 'react';
// Context
import { ProductContext } from '../context/ProductContextProvider';
// Components
import Cart from './shared/Cart';
// Styles
import styles from './Popular.module.css';

const AllProducts = () => {

    const products = useContext(ProductContext);

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h4>All Products</h4>
            </div>
            <div className={styles.cardContainer}>
                {
                    products.map(product => <Cart key={product.id} productData={product} />)
                }
            </div>
        </section>
        
    );
};

export default AllProducts;
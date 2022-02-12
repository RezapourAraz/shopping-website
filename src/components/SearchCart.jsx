import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './SearchCart.module.css';

const SearchCart = ({productData}) => {

    const {id, image, title } = productData;

    return (
        <Link to={`/products/${id}`} className={styles.container}>
            <div className={styles.title}>
                <p>{title}</p>
            </div>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
        </Link>
    );
};

export default SearchCart;
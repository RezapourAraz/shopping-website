import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './SpecialCard.module.css';

const Card = ({productData}) => {

    const { title, image, price } = productData;

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.title}>
                <h4>{title}</h4>
            </div>
            <div className={styles.price}>
                <p>{price} $</p>
                <span>old price</span>
            </div>
            <div className={styles.links}>
                <Link to='/'>Detailes</Link>
            </div>
            <div className={styles.btns}>
                <button>Add To Card</button>
            </div>
        </div>
    );
};

export default Card;
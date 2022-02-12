import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './Footer.module.css';
// Icons
import paypal from '../assets/icons/paypal.png'
import mastercard from '../assets/icons/MasterCard.png'
import maestro from '../assets/icons/maestro.png'
import visa from '../assets/icons/visa.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.container}>
                <div>
                    <h2>
                        E-CommerCe
                    </h2>
                    <p>Payment Methods</p>
                    <div className={styles.methods}>
                        <Link to="/"><img src={paypal} alt="paypal" /></Link>
                        <Link to="/"><img src={mastercard} alt="mastercard" /></Link>
                        <Link to="/"><img src={maestro} alt="maestro" /></Link>
                        <Link to="/"><img src={visa} alt="visa" /></Link>
                    </div>
                </div>
                <div>
                    <h4>Menu</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                        <li><Link to="/">Mens</Link></li>
                        <li><Link to="/">Womens</Link></li>
                        <li><Link to="/cart">Shopping Cart</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Category</h4>
                    <ul>
                        <li><Link to="/">Men</Link></li>
                        <li><Link to="/">women</Link></li>
                        <li><Link to="/">Jewelry</Link></li>
                        <li><Link to="/">electronic</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Social</h4>
                    <ul>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Twitter</Link></li>
                        <li><Link to="/">Facebook</Link></li>
                    </ul>
                </div>
            </section>
            <div className={styles.text}>
                <h2>This Template Made With	<span>&#10084;</span> by <span>Vahed Rezapour.</span></h2>
            </div>
        </footer>
    );
};

export default Footer;
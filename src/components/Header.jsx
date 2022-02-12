import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { CartContext } from '../context/CartContextProvider';
// Components
import Hamburger from './navbar/Hamburger';
// Styles
import styles from './Header.module.css';
import styled from 'styled-components';
// Icons
import shopCart from '../assets/icons/shopping-bag.svg';
import searchIcon from '../assets/icons/search1.svg';
import SearchBox from './SearchBox';

const Div = styled.div`
    transition: all .5s linear;
    input {
        display: ${({open}) => open ? "block" : "none"};
        transform: ${({ open }) => open ? "translateY(0)" : "translateY(-100%)" };
    }
    @media (min-width: 768px) {
        input {
            display: block;
            transform: translateY(0);
        }
    }
`;


const Header = () => {

    const { state } = useContext(CartContext);
    const [ search, setSearch ] = useState("");
    const [ open, setOpen ] = useState(false);

    const changeHandler = (e) => {
        setSearch(e.target.value);
    }

    const clickHandler = () => {
        setOpen(!open);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to='/'><h4>E-CommerCe</h4></Link>
            </div>
            <Hamburger />
            <Div open={open} className={styles.search}>
                <input type="text"  placeholder='Search what you want ...' onChange={changeHandler} value={search}/>
                <img className={styles.searchIcon} src={searchIcon} alt="Search icon" onClick={clickHandler} />
                <SearchBox searching={search} />
            </Div>
            <div className={styles.shopCart}>
                <Link to="/cart">
                    <img src={shopCart} alt="shop cart icon" />
                    {
                        state.itemsCounter > 0 && <span>{state.itemsCounter}</span>
                    }
                </Link>
            </div>
        </header>
    );
};

export default Header;
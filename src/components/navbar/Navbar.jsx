import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 10px 5px;
    ul {
        display: flex;

        li {
            margin: 0 10px;
            a {
                color: #595260;
                font-weight: bold;
                transition: all .3s linear;
            &:hover {
                color: #6998AB;
            }
            }
        }
    }
    @media (max-width: 768px ) {
        background: #6998AB;
        position: fixed;
        top: 0px;
        left: 0;
        width: 100vw;
        height: 100vh;
        padding: 20px;
        transition: all .5s ease-in-out;
        box-shadow: 0 5px 15px rgba(0, 0 , 0, .5);
        z-index: 5;
        transform: ${({open}) => open ? "translateY(0)" : "translateY(-110%)" };
        ul {
            flex-direction: column;
            align-items: center;
            margin-top: 80px;
            li {
                padding: 10px;
                margin: 10px 0;
                a{
                    color: #E3E3E3;
                    &:hover {
                        color: #233142;
                    }
                }
            }
        }
    }
    @media (max-width: 1024px ) {
        ul {
            li{
                margin: 0 5px;
                a{
                font-size: .9rem;
            }
        }
    }
`; 


const Navbar = ({open}) => {

    return (
        <Nav open={open}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">Men</Link></li>
                <li><Link to="/">Women</Link></li>
            </ul>
        </Nav>
    );
};

export default Navbar;
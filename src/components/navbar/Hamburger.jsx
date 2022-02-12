import React, { useState } from 'react';
import Navbar from './Navbar';
// Styles
import styled from 'styled-components';

const Div = styled.div`
    display: none;
    @media (max-width: 768px ) {
        position: ${({open}) => open ? "fixed" : "absolute"};
        top: 18px;
        left:30px;
        display: block;
        cursor: pointer;
        z-index: 6;
    div {
        width: 2.1rem;
        height: .5rem;
        background: ${({open}) => open ? "#E3E3E3" : "#6998AB"};
        margin: 5px 0;
        border-radius: 10px;
        transition: all .3s linear;
        transform-origin: -1px;
        &:nth-child(1) {
            transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)" };
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? "translateX(-100%)" : "translateX(0)" };
            opacity: ${({open}) => open ? "0" : "1"};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)" };
        }
    }
    
    }
`;

const Hamburger = () => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <Div open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </Div>
            <Navbar open={open} />
        </>
    );
};

export default Hamburger;
import React, {useContext } from 'react';
import styled from 'styled-components';
// Context
import { ProductContext } from '../context/ProductContextProvider';
import SearchCart from './SearchCart';

const Div = styled.div`
    position: absolute;
    top: 80px;
    left: -200px;
    padding: 5px;
    max-height: 200px;
    // background: #E3E3E3;
    width: 290px;
    border-radius: 5px;
    overflow: auto;
    transition: all .5s ease-in-out;
    @media (min-width: 425px) {
        left: -200px
    }
    @media (min-width: 600px){
        left: -125px;
    }
    @media (min-width: 769px) {
        left: 10px;
        top: 40px;
    }
`;


const SearchBox = ({searching}) => {

    const products = useContext(ProductContext);
    const searchedProduct = products.filter(product => product.title.toLowerCase().includes(searching.toLowerCase()));

    return (
        <Div>
            {
            searching === "" ? <div></div> : searchedProduct.map(product =><SearchCart key={product.id} productData={product} />)
            }
        </Div>
    );
};

export default SearchBox;
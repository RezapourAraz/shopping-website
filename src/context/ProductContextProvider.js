import React, { useState, useEffect, createContext } from 'react';
// API
import { getData } from '../services/Api';

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getData())
        }
        fetchAPI();
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
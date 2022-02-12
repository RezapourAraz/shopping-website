import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductDetaile from '../components/ProductDetaile';
// Functions
import { getDetailes } from '../services/Api';

const Detailes = () => {

    const params = useParams();
    const id = params.id;

    const [ product, setProduct ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProduct(await getDetailes(id))
        }
        fetchAPI();
    },[id]);

    return (
        <>
            <Header />
            <ProductDetaile key={product.id} productData={product}/>
            <Footer />
        </>
    );
};

export default Detailes;
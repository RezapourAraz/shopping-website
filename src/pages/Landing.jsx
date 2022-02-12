import React from 'react';
// Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Popular from '../components/Popular';
import ForMens from '../components/ForMens';
import Jewelery from '../components/Jewelery';
import Footer from '../components/Footer';


const Landing = () => {
    return (
        <>
          <Header />
          <Banner />
          <Popular />
          <ForMens />
          <Jewelery />
          <Footer />
        </>
    );
};

export default Landing;
import React from 'react';
import Footer from '../../CommonParts/Footer/Footer';
import Header from '../../CommonParts/Header/Header';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import HomeService from '../HomeService/HomeService';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeService/>
            <Products></Products>
            <Blog></Blog>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
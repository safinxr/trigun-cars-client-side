import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BrandDisplay from './BrandDisplay';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandDisplay></BrandDisplay>
            <Footer></Footer>
        </div>
    );
};

export default Home;
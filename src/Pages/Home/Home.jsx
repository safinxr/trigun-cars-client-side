import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BrandDisplay from './BrandDisplay';
import SuperSell from './SuperSell';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandDisplay></BrandDisplay>
            <SuperSell></SuperSell>
            <Footer></Footer>
        </div>
    );
};

export default Home;
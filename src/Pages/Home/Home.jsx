import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BrandDisplay from './BrandDisplay';
import SuperSell from './SuperSell';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandDisplay></BrandDisplay>
            <SuperSell></SuperSell>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
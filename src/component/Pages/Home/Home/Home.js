import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCard from '../HomeCard/HomeCard';
import HomeSection from '../HomeSection/HomeSection';
import Products from '../Products/Products';
import Rating from '../Rating/Rating';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCard></HomeCard>
            <Products></Products>
            <HomeSection></HomeSection>
            <Rating></Rating>
        </div>
    );
};

export default Home;
import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCard from '../HomeCard/HomeCard';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeSection from '../HomeSection/HomeSection';
import Rating from '../Rating/Rating';
import ShowRatings from '../ShowRatings/ShowRatings';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCard></HomeCard>
            <HomeProducts></HomeProducts>
            <HomeSection></HomeSection>
            <ShowRatings></ShowRatings>
            <Rating></Rating>
        </div>
    );
};

export default Home;
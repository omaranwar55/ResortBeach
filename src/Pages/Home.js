import React from 'react';
import Hero from '../Components/Hero'
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';

const Home =()=>{
    return(
        <>
        <Hero hero="defaultHero">
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        <FeaturedRooms/>
        <Services/>
        </>
    )
}
export default Home;
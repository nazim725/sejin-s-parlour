import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar'
import Contact from '../../Contact/Contact';
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';
import Reviews from '../../Home/Reviews/Reviews'
import Screen from '../Screen/Screen';
import Footer from '../../Footer/Footer';
import bg from '../../../Images/bgImage2.png'
import AppBar from '../../../Shared/AppBar/AppBar';

const Home = () => {
    return (
        <div style={{ background: `url(${bg})` }}>
            <AppBar></AppBar>
            <Bannar></Bannar>
            <Services></Services>
            <Screen></Screen>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
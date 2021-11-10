import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar'
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
         <Navbar></Navbar>
         <Bannar></Bannar>
         <Services></Services>
        </div>
    );
};

export default Home;
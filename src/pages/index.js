import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/data';
import Navbar from '../components/navbar';
import Services from '../components/Services';
import Sidebar from '../components/sidebar';


const HomeSection = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
            <Navbar toggle={toggleSidebar} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />

            <Footer />
        </>
    );
};



export default HomeSection;

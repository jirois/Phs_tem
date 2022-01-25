import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/navbar';
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
        </>
    );
};



export default HomeSection;

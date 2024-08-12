import React, { useState, useRef, useEffect } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Experiance from './Experiance';
import Contact from './Contact';
import ScrollProvider from './ScrollContext';

function FullPageComponent() {
    const [scrollY, setScrollY] = useState(0);
    const fullPageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(fullPageRef.current.scrollTop);
        };
        fullPageRef.current.addEventListener('scroll', handleScroll);
        return () => {
            fullPageRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={fullPageRef} className="full-page-content">
            <ScrollProvider>
                <NavBar />
                <Hero />
                <Experiance />
                <Contact />
                <NavBar scrollY={scrollY} />
            </ScrollProvider>
        </div>
    );
}

export default FullPageComponent;

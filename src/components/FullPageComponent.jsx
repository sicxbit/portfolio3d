import React, { useState, useRef, useEffect } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import TheCanvas from './TheCanvas'; // Import TheCanvas
import { ScrollProvider } from './ScrollContext';

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
        <ScrollProvider>
            <div ref={fullPageRef} className="full-page-container">
                <NavBar />
                <Hero />
                <TheCanvas /> {/* Include TheCanvas here */}
            </div>
        </ScrollProvider>
    );
}

export default FullPageComponent;
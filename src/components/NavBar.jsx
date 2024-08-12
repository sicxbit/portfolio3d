import React, { useState, useEffect, useContext } from 'react';
import { ScrollContext } from './ScrollContext';

function NavBar() {
  const { scrollY } = useContext(ScrollContext);

  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    setShowNavBar(scrollY > 900);
  }, [scrollY]);

  return (
    <nav className={`navbar ${showNavBar ? 'show' : ''}`}>
      <div className="navbar-content">
        <div className="logo">Arunjith</div>
        <div className="nav-links">
          <a href="#">Works</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

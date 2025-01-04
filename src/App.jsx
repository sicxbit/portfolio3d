import React, { useEffect } from 'react';
import FullPageComponent from './components/FullPageComponent';
import "./index.css";
import Core from './components/Core';
function App() {
  useEffect(() => {
    const setBodyHeight = () => {
        
        const totalHeight = document.documentElement.scrollHeight;
        
        document.body.style.minHeight = `${totalHeight}px`;
    };
    setBodyHeight();


    window.addEventListener('resize', setBodyHeight);

    return () => {
        window.removeEventListener('resize', setBodyHeight);
    };
}, []);

  return (
    <Core />
  )
}

export default App
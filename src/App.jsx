import React, { useEffect } from 'react';
import FullPageComponent from './components/FullPageComponent';
import "./index.css";
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
    <FullPageComponent/>
  )
}

export default App
import React from 'react';
import githubIcon from '../assets/icons/github.svg'; 
import kaggleIcon from '../assets/icons/kaggle.svg';
function Contact() {
  return (
    <div className="contact-box">
      <h1>Contact</h1>
      <div className="socials">
        {/* Kaggle Section */}
        <div className="card">
          
          <a href="https://www.kaggle.com/arunjithts" target="_blank" rel="noopener noreferrer">
          <img
              src={kaggleIcon}
              alt="Kaggle Icon"
              className="contactIcons"
            />
            My Kaggle
          </a>
        </div>

        {/* GitHub Section */}
        <div className="card">
          <a href="https://github.com/sicxbit" target="_blank" rel="noopener noreferrer">
            <img
              src={githubIcon} 
              alt="GitHub Icon"
              className="contactIcons"
            />
            My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

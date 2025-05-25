import React from 'react';
import { Link } from 'react-scroll'; // or 'react-router-dom' based on your project
import {  faBloggerB, faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/Footer.css';

const Footer = () => {
  const handleLinkClick = (section) => {
    console.log(`Navigating to ${section}`);
  };

  return (
    <footer className="footer-sections">
      <div className="container">
        <div className="navbar-footers">
          <Link
            className="navbar-brand"
            to="home-section"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("home")}
          >
            <span className="logo-circles">Ryu Jae Won</span>
          </Link>
        </div>
        <div className="social-icons">
          <a href="mailto:" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.facebook.com/ryu.jaewon.56" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/ryu.jaewon.56/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/@_thecallinglocus1442/videos" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://blog.naver.com/geumsa-haegeum" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBloggerB} />
          </a>
        </div>
       
        <p className="footer-copyrights">
        Copyright © Ryu Jae Won. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

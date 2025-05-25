import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/HeaderBanner.css'; 
import image1 from '../images/Won1.jpeg'; 
import image2 from '../images/Won2.jpeg'; 
import image3 from '../images/Won3.jpeg'; 
import image4 from '../images/Won4.jpeg'; 
import image5 from '../images/Won5.jpeg'; 

const HeaderBanner = () => {
  const banners = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  const settings = {
    dots: true,           // Show navigation dots
    infinite: true,       // Enable infinite scrolling
    speed: 500,           // Transition speed in milliseconds
    slidesToShow: 1,      // Number of slides to show at a time
    slidesToScroll: 1,    // Number of slides to scroll at a time
    arrows: true,         // Show next/prev arrows
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,  // Autoplay speed in milliseconds
  };

  return (
    <div className="header-banner">
      <Slider {...settings}>
        {banners.map((image, index) => (
          <div key={index} aria-hidden="true">
            <div className="banner-item" style={{ backgroundImage: `url(${image})` }}>
              {/* 배너 텍스트 제거 */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderBanner;

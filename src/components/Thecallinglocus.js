import React, { useState, useEffect, useCallback } from 'react';
import '../css/KimYoungJaeIntroduction.css';
import calling1 from '../images/IMG1.jpeg';
import calling2 from '../images/IMG2.jpeg';
import calling3 from '../images/IMG3.jpeg';
import calling4 from '../images/IMG4.jpeg';
import calling5 from '../images/IMG5.jpeg';
import calling6 from '../images/IMG6.jpeg';

// import gimage1 from '../images/gimage1.jpeg';
// import gimage2 from '../images/gimage2.jpeg';

import Footer from './Footer'; // Footer 컴포넌트 임포트


const Thecalling = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [calling1, calling2, calling3,calling4,calling5,calling6];
  const [year, setYear] = useState(2025); // 선택된 년도를 상태로 관리
  const performanceImages = {
    // 2024: [gimage1, gimage2],
  
  };
  

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [handleNext]);

  const handlePrevYear = () => {
    setYear((prev) => (prev > 2024 ? prev - 1 : prev)); // 2022년 이하로 내려가지 않도록
  };

  const handleNextYear = () => {
    setYear((prev) => (prev < 2025 ? prev + 1 : prev)); // 2024년 이상으로 올라가지 않도록
  };

  return (
    <div className='gugak-choir-main'>
      <div className="gugak-choir-intro">
        <header className="headers">
       
        </header>

        <div className="content">
          <div className="carousel">
            <button className="prev" onClick={handlePrev}>{'<'}</button>
            <div className="carousel-image">
              <img 
                src={images[currentSlide]} 
                alt={`Gugak Choir performance scene ${currentSlide + 1}`} 
              />
            </div>
            <button className="next" onClick={handleNext}>{'>'}</button>
          </div>

          <section  className="description">
            
            
            <h2>THe calling locus 소개</h2>

            <p>
              "더콜링로커스" 팀은 국가무형유산, 서울무형유산 등을 이수한 이수자들과
              국악을 전공한 전공자들 그리고 서양 클래식 전공자들의 새로운 조합으로 탄생 된 동서양을 아우르는 음악 공동체이다.
              국악을 기반으로 한 전통문화의 전반적 예술의 발전과 새로운 창작 작업에 매진하고 있다.
              국악을 기반으로 한 전통문화의 전반적 예술의 발전과 새로운 창작 작업에 매진하고 있다.
              특히 무형유산의 아름다움과 예술성을 중심으로 전통 예술공연과 교육을 통해 우리 한민족의 전통문화를 널리 알리고
              시대에 맞는 고유문화발전과 함꼐 대중들이 공감하며 선호하는 장르를 지향한다.
              앞으로 "더 콜링로커스"는 각 지역의 숨어있는 문화유산 등 역사적인 내용을 토대로 작품을 구성하여 각 지역의 
              시민들과 공부하는 어린 학생들에게 한국음악을 통해 역사를 알리고 동시에 우리의 음악을 널리 알리는 공연 사업에 주력하고자 한다.

            </p>

            <h2>공연실적</h2>
            <ul>
              <li>2023년 3월 국립극장 해오룸 10주년 기념공연 "죽음과 축제"</li>
            
              <li>유튜브 공연 영상 공개 (THe calling locus  "더콜링로커스") 
                  <a href="https://www.youtube.com/watch?v=vGl67dFbPKM&utm_source=chatgpt.com">영상1</a>,
                  <a href="https://www.youtube.com/watch?v=h9YvMxxouOA&utm_source=chatgpt.com">영상2</a>
              </li>
            </ul>
          </section>

          <section id="performance" className="performance-info">
            <h2>공연정보</h2>
            <div className="year-selector">
              <button onClick={handlePrevYear}>{'<'}</button>
              <span>{year}</span>
              <button onClick={handleNextYear}>{'>'}</button>
            </div>
            <div className="performance-thumbnails">
              {performanceImages[year]?.map((image, index) => (
                <img key={index} src={image} alt={`Thumbnail for ${year} - ${index + 1}`} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer /> {/* Footer 컴포넌트를 추가합니다 */}
    </div>
  );
};

export default Thecalling;

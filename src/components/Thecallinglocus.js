import React, { useState, useEffect, useCallback } from 'react';
import '../css/KimYoungJaeIntroduction.css';
import gugak1 from '../images/gugak3.jpeg';
import gugak2 from '../images/gugak4.jpeg';
import gugak3 from '../images/gugak5.jpeg';

import gimage1 from '../images/gimage1.jpeg';
import gimage2 from '../images/gimage2.jpeg';

import Footer from './Footer'; // Footer 컴포넌트 임포트


const Thecalling = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [gugak1, gugak2, gugak3];
  const [year, setYear] = useState(2025); // 선택된 년도를 상태로 관리
  const performanceImages = {
    2024: [gimage1, gimage2],
  
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
              김영재류 해금산조보존회는 해금 명인 지영희 선생님으로부터 김영재 선생님에게 전수된 민속악의 정수를 보존하고 계승·발전시키기 위해 설립된 단체입니다.
              김영재류 해금산조는 김영재 선생님이 연주 생활을 통해 학습한 가락을 해금에 얹어 구성한 산조로, 1980년대부터 해금 전공 학생들에게 전수되기 시작했습니다.
              보존회의 주요 연주자인 류재원 선생님은 2021년 9월 28일 국가무형문화재 전수교육관 민속극장 풍류에서 '제16회 무사 류재원 해금 독주회: 현대에서 전통의 길을 걷다'를 개최하여 김영재류 해금산조의 현대적 해석을 선보였습니다
              이처럼 김영재류 해금산조 보존회는 전통 해금산조의 보존과 현대적 계승을 위해 지속적으로 노력하고 있습니다.
            </p>

            <h2>공연실적</h2>
            <ul>
              <li>김영재류 해금산조 연구 및 정기 연습 (2024년 6월, 12월)</li>
              <li>김영재 명인 전승 음악회</li>
              <li>2024년 국가무형 유산 거문고산조 김영재 보유자 공개 행사</li>
              <li>제 16회 류재원 해금 독주회 현대에서 전통의 길을 걷다</li>
              <li>술이부작 거문고 창작의 세계</li>
              <li>국립국악원 연주 참여</li>
              <li>전통예술 계승을 위한 학술 및 공연 행사</li>
              <li>유튜브 공연 영상 공개 (김영재류 해금 산조 연주) 
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

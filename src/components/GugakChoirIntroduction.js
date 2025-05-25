import React, { useState, useEffect, useCallback } from 'react';
import '../css/GugakChoirIntroduction.css';

import gugak1 from '../images/gugak1.jpeg';
import gugak2 from '../images/gugak2.jpeg';
import jimage1 from '../images/jimage1.jpeg';
import jimage2 from '../images/jimage2.jpeg';
import jimage3 from '../images/jimage3.jpeg';
import jimage4 from '../images/jimage4.jpeg';
import jimage5 from '../images/jimage5.jpeg';
import jimage6 from '../images/jimage6.jpeg';
import jimage7 from '../images/jimage7.jpeg';
import jimage9 from '../images/jimage9.jpeg';
import jimage10 from '../images/jimage10.jpeg';
import jimage11 from '../images/jimage11.jpeg';
import jimage12 from '../images/jimage12.jpeg';
import jimage13 from '../images/jimage13.jpeg';
import jimage14 from '../images/jimage14.jpeg';
import jimage15 from '../images/jimage15.jpeg';
import jimage16 from '../images/jimage16.jpeg';
import jimage17 from '../images/jimage17.jpeg';
import jimage18 from '../images/jimage18.jpeg';
import jimage19 from '../images/jimage19.jpeg';

import Footer from './Footer'; // Footer 컴포넌트 임포트

const GugakChoirIntroduction = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [gugak1, gugak2];
  const [year, setYear] = useState(2025); // 선택된 년도를 상태로 관리
  const performanceImages = {
    2025: [jimage19],
    2024: [jimage1, jimage2],
    2023: [jimage3],
    2022: [jimage4, jimage5],
    2020: [jimage6],
    2018: [jimage7, jimage9, jimage10],
    2017: [jimage11, jimage12],
    2016: [jimage13, jimage14],
    2015: [jimage15, jimage16, jimage17],
    2014: [jimage18],
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
    setYear((prev) => (prev > 2014 ? prev - 1 : prev)); // 2022년 이하로 내려가지 않도록
  };

  const handleNextYear = () => {
    setYear((prev) => (prev < 2025 ? prev + 1 : prev)); // 2024년 이상으로 올라가지 않도록
  };

  return (
    <div className='gugak-choir-main'>
      <div className="gugak-choir-intro">
        <header className="header">
          <h1>국악창작악단</h1>
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

          <section id="intro" className="description">
            <h2>창작악단 소개</h2>
            <p>
              국악창작악단은 전통 국악을 기반으로 현대적인 감각을 더하여 창작 국악을 선보이는 단체입니다. 
              이들은 국악의 대중화와 세계화를 목표로 하며, 다양한 장르와의 융합을 시도하면서 새로운 음악적 시도를 지속하고 있습니다. 
              전통과 현대를 접목하여 지금까지 축적해왔던 국악원의 작품들을 기반으로 각종 연주회와 창작음악을 통해 한국음악의 발전에 기여하고 있습니다.
            </p>

            <h2>공연실적</h2>
            <ul>
              <li>화성시 예술단 제3회 국악정기연주회 &lt;정조의 르네상스를 노래하다&gt;</li>
              <li>2024년 경기도 문화의 날 지원사업&lt;조선의 왕들이 사랑한 경기음악&gt;</li>
              <li>The Calling Locus 기념연주회&lt;죽음과 축제&gt;</li>
              <li>정원용 회방연 재현행사</li>
              <li>2020 서울시 공연업 회생 프로젝트 공모사업&lt;12가사연구회 기억과 회복의 시간! 그리고 13번째 가사&gt;</li>
              <li>2021년 서울시 전통문화 발굴·계승 지원사업&lt;제2회 홍현수 12가사 연구회 정기공연 "고호한 가사"&gt;</li>
              <li>국립무형유산원 토요상설공연&lt;이수자뎐 홍현수의 오래된 아름다움, 가사&gt;</li>
              <li>직장문화배달사업&lt;12가사연구회의 고호의 정원 오래된 아름다움, 정가를 원하다&gt;</li>
              <li>2020년 전통문화 발굴·계승 지원사업&lt;제1회 12가사연구회 정기공연 “전하지 않은 6가지 이야기"&gt;</li>
              <li>The Calling Locus & Worship Festival (스페셜 연주회)</li>
              <li>The Calling Locus Chapel (스페셜 연주회)</li>
              <li>“소명의 자리” 국악찬양단 정기 연주회</li>
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

export default GugakChoirIntroduction;

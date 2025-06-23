import React, { useState, useMemo, useEffect } from "react";
import "../css/PerformanceInfo.css"; // 스타일 적용

import Footer from "./Footer";
// 국악 
import gimage1 from '../images/gimage1.jpeg';
import gimage2 from '../images/gimage2.jpeg';
import gimage3 from '../images/gimage3.jpeg';
import gimage4 from '../images/gimage4.jpeg';
import gimage5 from '../images/gimage5.jpeg';
import gimage6 from '../images/gimage6.jpeg';
import gimage7 from '../images/gimage7.jpeg';
import gimage8 from '../images/gimage8.jpeg';
import gimage9 from '../images/gimage9.jpeg';
import gimage10 from '../images/gimage10.jpeg';
import gimage11 from '../images/gimage11.jpeg';



//  국악 찬양 
import jimage1 from '../images/jimage1.jpeg';
import jimage2 from '../images/jimage2.jpeg';
import jimage3 from '../images/jimage3.jpeg';
import jimage4 from '../images/jimage4.jpeg';
import jimage5 from '../images/jimage5.jpeg';
import jimage6 from '../images/jimage6.jpeg';
import jimage7 from '../images/jimage7.jpeg';
import jimage8 from '../images/jimage8.jpeg';
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



// 공연 데이터

const performances = [

  { id: 1, title: "술이 부작", date: "2024-07-12 | 19:30", location: "Wed, Jan 15",  imgSrc: gimage1, link: "#", isReservable: false, image: gimage1 },
  { id: 2, title: "우리의 소리로 찬송가의 역사를 노래하라", date: "2024-09-29 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage1, link: "#", isReservable: false, image: jimage1 },
  { id: 3, title: "국가무형유산 거문고 산조 김영제 소유자", date: "2024-06-26 | 19:00", location: "Wed, Jan 15",  imgSrc: gimage2, link: "#", isReservable: false, image: gimage2 },
  { id: 4, title: "조선 왕들이사랑한 경기음악", date: "2024-10-23 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage2, link: "#", isReservable: false, image: jimage2 },
  { id: 5, title: "현대에서 전통의 길을 걷다", date: "2021-09-28 | 19:30", location: "Wed, Jan 15", imgSrc: gimage3, link: "#", isReservable: false, image: gimage3 },
  { id: 6, title: "THE CALLING LOCUS 죽음과 축제", date: "2023-03-10 | 19:30", location: "Wed, Jan 15",  imgSrc: jimage3, link: "#", isReservable: false, image: jimage3 },
  { id: 7, title: "Always Thanksgiving", date: "2022-10-30 | 20:00", location: "Wed, Jan 15",  imgSrc: gimage4, link: "#", isReservable: false, image: gimage4 },
  { id: 8, title: "대헌민악회 정기연주회", date: "2024-19-03 | 19:30", location: "Wed, Jan 15", imgSrc: jimage4, link: "#", isReservable: false, image: jimage4 },
  { id: 9, title: "세상 모든 소리로 찬양", date: "2022-05-29 | 19:00", location: "Wed, Jan 15", imgSrc: gimage5, link: "#", isReservable: false, image: gimage5 },
  { id: 10, title: "박범훈류 피리산조 연주회 회형", date: "2023-11-25 | 17:00", location: "Wed, Jan 15",  imgSrc: jimage5, link: "#", isReservable: false, image: jimage5 },
  { id: 11, title: "소명의 자리 시리즈1발매기념 찬양예배", date: "2020-02-09 | 19:00", location: "Wed, Jan 15",  imgSrc: gimage6, link: "#", isReservable: false, image: gimage6 },
  { id: 12, title: "여호와께 감사하라", date: "2018-10-28 | 19:00", location: "Wed, Jan 15", imgSrc: jimage6, link: "#", isReservable: false, image: jimage6 },
  { id: 13, title: "소프라노 박동희 성가 독창회", date: "2017-07-01 | 19:30", location: "Wed, Jan 15", imgSrc: gimage7, link: "#", isReservable: false, image: gimage7 },
  { id: 14, title: "The Calling Locus Chapel 시대별 예배", date: "2018-06-17 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage7, link: "#", isReservable: false, image: jimage7 },
  { id: 15, title: "전통에서 영성을 보다", date: "2016-12-16 | 19:30", location: "Wed, Jan 15",  imgSrc: gimage8, link: "#", isReservable: false, image: gimage8 },
  { id: 16, title: "The Calling Locus Chapel 예배하고 찬양하다 ", date: "2018-04-12 | 20:00", location: "Wed, Jan 15", imgSrc: jimage8, link: "#", isReservable: false, image: jimage8 },
  { id: 17, title: "류재원 해금 독주회", date: "2012-11-23 | 19:30", location: "Wed, Jan 15",  imgSrc: gimage9, link: "#", isReservable: false, image: gimage9 },
  { id: 18, title: "하나님 감사 합니다.", date: "2024-10-22 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage9, link: "#", isReservable: false, image: jimage9 },
  { id: 19, title: "라파양상블 정기연주회", date: "2021-09-06 | 19:30", location: "Wed, Jan 15",  imgSrc: gimage10, link: "#", isReservable: false, image: gimage10 },
  { id: 20, title: "대덕교회 창립 60주년 기념 음악회", date: "2017-09-22 | 19:30", location: "Wed, Jan 15",  imgSrc: jimage10, link: "#", isReservable: false, image: jimage10 },
  { id: 21, title: "하나님의 사랑과 시험", date: "2017-06-18 | 19:00", location: "Wed, Jan 15",  imgSrc: gimage11, link: "#", isReservable: false, image: gimage11 },
  { id: 22, title: "소명의 자리 찬양예배", date: "2016-10-09 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage11, link: "#", isReservable: false, image: jimage11 },
  { id: 24, title: "십자가에 목박힌 사람 예수", date: "2016-04-24 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage12, link: "#", isReservable: false, image: jimage12 },



  { id: 26, title: "DECEMBER 15", date: "2015-12-15 | 20:00", location: "Wed, Jan 15", imgSrc: jimage13, link: "#", isReservable: false, image: jimage13 },
  { id: 28, title: "소명의자리 찬양 예배", date: "2015-10-25 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage14, link: "#", isReservable: false, image: jimage14 },
  { id: 30, title: "제2회 두번째 찬양 찬양으로 성자들을 만나다", date: "2015-01-11 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage15, link: "#", isReservable: false, image: jimage15 },
  { id: 32, title: "PRAYER", date: "2014-06-09 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage16, link: "#", isReservable: false, image: jimage16 },
  { id: 33, title: "제2회 두번째 찬양 찬양으로 성자들을 만나다", date: "2015-01-11 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage15, link: "#", isReservable: false, image: jimage17 },
  { id: 34, title: "PRAYER", date: "2014-06-09 | 19:00", location: "Wed, Jan 15",  imgSrc: jimage16, link: "#", isReservable: false, image: jimage18 },
];


// 공연 정보 컴포넌트
const PerformanceInfo = ({ selectedYear, selectedMonth, currentPage, itemsPerPage }) => {
  const filteredPerformances = useMemo(() => {
    return performances.filter(({ date }) => {
      const [datePart] = date.split("|");
      const performanceDate = new Date(datePart.trim());
      return performanceDate.getFullYear() === selectedYear && performanceDate.getMonth() + 1 === selectedMonth;
    });
  }, [selectedYear, selectedMonth]);

  const currentPagePerformances = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPerformances.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPerformances, currentPage, itemsPerPage]);

  return (
    <div className="performance-list">
      {currentPagePerformances.map(({ id, title, date, location, imgSrc, link }) => (
        <div className="performance-card" key={id}>
          <div className="card-header">
            <img src={imgSrc} alt={title} onError={(e) => (e.target.src = "/fallback.jpg")} />
          </div>
          <div className="card-body">
            <span className="badge">{title.includes("국악전통") ? "국악전통" : "찬양 공연"}</span>
            <h3>{title}</h3>
            <p>공연일시: {date}</p>
            <p>공연장소: {location}</p>
            <div className="card-footer">
              <a href={link} className="detail-btn">자세히보기</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// 메인 앱 컴포넌트
const App = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleYearChange = (direction) => {
    setSelectedYear((prevYear) => prevYear + direction);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const totalPages = useMemo(() => {
    return Math.ceil(
      performances.filter(({ date }) => {
        const [datePart] = date.split("|");
        const performanceDate = new Date(datePart.trim());
        return performanceDate.getFullYear() === selectedYear && performanceDate.getMonth() + 1 === selectedMonth;
      }).length / itemsPerPage
    );
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear, selectedMonth]);

  return (
    <div className="container">
      <header className="header"></header>
      <div className="content">
        <main className="main-content">
          <h2>공연 일정</h2>
          
          {/* 연도 선택 */}
          <div className="yearNavigation">
            <button className="navButton" onClick={() => handleYearChange(-1)}>{"<"}</button>
            <span className="year">{selectedYear}</span>
            <button className="navButton" onClick={() => handleYearChange(1)}>{">"}</button>
          </div>

          {/* 월 선택 */}
          <div className="monthNavigation">
            {Array.from({ length: 12 }, (_, i) => (
              <button
                key={i + 1}
                className={`monthButton ${selectedMonth === i + 1 ? "selected" : ""}`}
                onClick={() => handleMonthChange(i + 1)}
              >
                {i + 1}월
              </button>
            ))}
          </div>

          {/* 공연 정보 컴포넌트 */}
          <PerformanceInfo selectedYear={selectedYear} selectedMonth={selectedMonth} currentPage={currentPage} itemsPerPage={itemsPerPage} />

          {/* 페이지네이션 */}
          <div className="pagination">
            <button className="pageButton" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>{"< 이전"}</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`pageButton ${currentPage === i + 1 ? "selected" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button className="pageButton" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>{"다음 >"}</button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;

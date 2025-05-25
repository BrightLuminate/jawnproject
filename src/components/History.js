import React from "react";
import "../css/History.css";
import Footer from './Footer'; // Import the Footer component

const History = () => {
  const historyData = {
    "2024s": [
      { date: "2022.04", event: "4월 11일 극동방송 용인동탄지회 월례예배 특순" },
      
    ],
    "2023s": [
      { date: "2023.03", event: "제 10회 소명의 자리 10주년 기념연주회 죽음과 축제" },
      
    ],
    "2022s": [
      { date: "2022.05", event: "제 9회 소명의 자리 정기연주회 세상모든 소리로 찬양" },
      
    ],
    "2020s": [
      { date: "2020.02", event: "제 8회 소명의 자리 정기연주회 The calling locus chapel" },
      { date: "2020.02", event: "소명의 자리 시리즈1 음반 발매 및 악보 출판" },
    ],
    "2019s": [
      { date: "2019.09", event: "방배동 빛교회 소명의 자리 초청공연 시대별 예배" },
      { date: "2019.12", event: "제 16회 장로회신학대학교 평신도교육대학원 총동문 송년의 밤" },
    ],
    "2018s": [
      { date: "2018.04", event: "극동방송 febc응접실 출연" },
      { date: "2018.04", event: "제6-2회 소명의 자리 스페셜공연 예배하고 찬양하다" },
      { date: "2018.06", event: "제7회 소명의 자리 정기연주회 시대별 예배" },
      { date: "2018.07", event: "세계감리교축제 대의원회 소명의 자리 초청공연" },
      { date: "2018.07", event: "일산 거룩한 빛 광성교회 소명의 자리 초청공연" },
      { date: "2018.10", event: "장로교 신학자 세미나 소명의 자리 초청연주" },
    ],
    "2017s": [
      { date: "2017.06", event: "제6회 소명의 자리 정기연주회 하나님의 사랑과 시험" },
      { date: "2017.12", event: "제14회 장로회신학대학교 평신도 교육대학원 총동문 송년의밤" },
    ],
    "2016s": [
      { date: "2016.04", event: "제4회 소명의 자리 정기연주회 십자가에 못박힌 사람 예수" },
      { date: "2016.10", event: "제5회 소명의 자리 정기연주회 깊어가는 가을 밤 찬양예배" },
      { date: "2016.12", event: "제13회 장로회신학대학교 평신도교육대학원 총동문 송년의 밤" },

    ],
 
   
    // Add more decades as needed
  };

  return (
    <div className="App">
      <div className="history-page">
        <main className="content">
          <div className="banner">
            {/* <h1>전북특별자치도립국악원</h1>
            <p>전통예술의 미래가치를 열어갑니다</p> */}
          </div>
          <section className="history">
            {Object.keys(historyData).map((decade) => (
              <div key={decade} className="history-decade">
                <h2>{decade}</h2>
                <div className="timeline">
                  {historyData[decade].map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-date">{item.date}</div>
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
      <Footer /> {/* Place the Footer component at the bottom */}
    </div>
  );
};

export default History;

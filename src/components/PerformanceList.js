import React, { useState } from "react";
import "../css/PerformanceList.css";
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
import jimage19 from '../images/jimage19.jpeg';


const events = [
  { id: 1, category: "국악 찬양", title: "세상은 교회가 되고 교회는 세상이 되다", date: "2025-05-16", time: "20:00", location: "청운교회비전홀", image: jimage19 },
  { id: 1, category: "국악 전통", title: "술이 부작", date: "2024-07-12", time: "19:30", location: "민속극장 풍류", image: gimage1 },
  { id: 2, category: "국악 찬양", title: "우리의 소리로 찬송가의 역사를 노래하라", date: "2024-09-29", time: "19:00", location: "청운교회 비전홀", image: jimage1 },
  { id: 3, category: "국악 전통", title: "국가무형유산 거문고 산조 김영재 소유자", date: "2024-06-26", time: "19:00", location: "민속극장 풍류", image: gimage2 },
  { id: 4, category: "국악 찬양", title: "조선 왕들이사랑한 경기음악", date: "2024-10-23", time: "19:00", location: "팔달 문화센터 예당마루", image: jimage2 },
  { id: 5, category: "국악 전통", title: "현대에서 전통의 길을 걷다", date: "2021-09-28", time: "19:30", location: "민속극장 풍류", image: gimage3 },
  { id: 6, category: "국악 찬양", title: "THE CALLING LOCUS 죽음과 축제", date: "2023-03-10", time: "19:30", location: "국립극장 해오름", image: jimage3 },
  { id: 7, category: "국악 전통", title: "정조의 르네상스를 노래하다", date: "2024-11-30", time: "19:00", location: "동탄복합문화센터 반석아트홀", image: gimage4 },
  { id: 8, category: "국악 찬양", title: "Always Thanksgiving", date: "2022-10-30", time: "12:00", location: "청운교회", image: jimage4 },
  { id: 9, category: "국악 전통", title: "대헌민악회 정기연주회", date: "2024-10-03", time: "19:30", location: "민속극장 풍류", image: gimage5 },
  { id: 10, category: "국악 찬양", title: "세상 모든 소리로 찬양", date: "2022-05-29", time: "19:00", location: "청운교회 비전홀", image: jimage5 },
  { id: 11, category: "국악 전통", title: "박범훈류 피리산조 연주회 회형", date: "2023-11-25", time: "17:00", location: "국립국악원 예악당", image: gimage6 },
  { id: 12, category: "국악 찬양", title: "소명의 자리 시리즈1발매기념 찬양예배", date: "2020-02-09 ", time: "19:00", location: "청운교회 비전홀", image: jimage6 },
  { id: 13, category: "국악 전통", title: "서사입은 가사", date: "2022-11-08", time: "19:30", location: "헤르만아트홀", image: gimage7 },
  { id: 14, category: "국악 찬양", title: " 여호와께 감사하라 ", date: "2018-10-28", time: "19:00", location: "영산아트홀", image: jimage7 },
  { id: 15, category: "국악 전통", title: "소프라노 박동희 성가 독창회", date: "2017-07-01", time: "19:30", location: "청운교회 비전홀", image: gimage8 },
  { id: 16, category: "국악 찬양", title: "The Calling Locus Chapel 시대별 예배", date: "2018-06-17", time: "19:00", location: "한국문화의집 코우스", image: jimage8 },
  { id: 17, category: "국악 전통", title: "전통에서 영성을 보다", date: "2016-12-16", time: "19:30", location: "청운교회 비전홀", image: gimage9 },
  { id: 18, category: "국악 찬양", title: "The Calling Locus Chapel 예배하고 찬양하다", date: "2018-04-12", time: "20:00", location: "한국문화의집 코우스", image: jimage9 },
  { id: 19, category: "국악 전통", title: "제 9-2회 류재원 해금 독주회", date: "2012-11-23", time: "19:30", location: "청운교회 비전혼", image: gimage10 },
  { id: 20, category: "국악 찬양", title: "하나님 감사 합니다", date: "2012-10-22", time: "19:00", location: "영산아트홀", image: jimage10 },
  { id: 21, category: "국악 전통", title: "라파앙상블 정기연주회", date: "2021-09-06", time: "19:30", location: "대덕교회 모리아 예볘당", image: gimage11 },
  { id: 22, category: "국악 찬양", title: "대덕교회 창립 60주년 기념 음악회", date: "2017-09-22", time: "19:30", location: "청운교회 비전홀", image: jimage11 },
  { id: 24, category: "국악 찬양", title: "하나님의 사랑과 시험", date: "2017-06-18", time: "19:00", location: "청운교회 비전홀", image: jimage12 },
  { id: 26, category: "국악 찬양", title: "소명의 자리 찬양예배", date: "2016-10-09", time: "19:00", location: "청운교회 비전홀", image: jimage13 },
  { id: 28, category: "국악 찬양", title: "십자가에 목박힌 사람", date: "2016-04-24", time: "19:00", location: "청운교회비전홀", image: jimage14 },
  { id: 30, category: "국악 찬양", title: "DECEMBER 15", date: "2015-12-15", time: "20:00", location: "울림푸스 홀", image: jimage15 },
  { id: 32, category: "국악 찬양", title: "소명의자리 찬양예배", date: "2015-10-25 ", time: "19:00", location: "청운교회비전홀", image: jimage16 },
  { id: 34, category: "국악 찬양", title: "제2회 두번째 찬양 찬양으로 성자들을 만나다", date: "2015-01-11", time: "19:00", location: "청운교회비전홀", image: jimage17 },
  { id: 35, category: "국악 찬양", title: "PRAYER", date: "2014-06-09", time: "19:00", location: "청운교회비전홀", image: jimage18 },
  

];


const categories = ["All", "국악 전통", "국악 찬양"];

const PerformanceList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All" ? events : events.filter(event => event.category === selectedCategory);

  
  return (
    <div className="performance-list-container bg-[#0d0d0d] text-white p-10 text-center">
      {/* <h2 className="upcoming text-[#ff4a4a] italic text-lg">류재원교수님</h2> */}
      <h1 className="title text-3xl font-bold">공연 Performance</h1>


      {/* 필터 버튼 */}
      <div className="filter-buttons flex justify-center gap-4 my-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category ? "bg-[#ff4a4a]" : "bg-[#2c2c2c] hover:bg-[#ff4a4a]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 가로 스크롤 가능한 이벤트 리스트 */}
      <div className="events-scroll-container overflow-x-auto whitespace-nowrap">
        <div className="events-grid flex flex-nowrap gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card bg-[#161616] p-4 rounded-lg shadow-lg text-left w-60 inline-block">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-md" />
              <span className="category bg-[#ff4a4a] text-white text-xs px-3 py-1 rounded-full mt-3 inline-block">
                {event.category}
              </span>
              <p className="date-time text-sm text-gray-400 mt-2">
                <span role="img" aria-label="calendar">🗓</span> {event.date} •  
                <span role="img" aria-label="clock">⏰</span> {event.time}
              </p>
              <h3 className="event-title text-lg font-semibold mt-1">{event.title}</h3>
              <p className="location text-xs text-gray-500 mt-1">
                <span role="img" aria-label="location">📍</span> {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default PerformanceList;

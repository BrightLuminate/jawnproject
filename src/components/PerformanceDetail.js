import React from "react";
import { useParams, Link } from "react-router-dom";
import "../css/PerformanceList.css";
// import images as needed
import jimage20 from '../images/jimage20.png';
import jimage21 from '../images/jimage21.jpg';
import gimage12 from '../images/gimage12.jpg';
import toyoeventimage from '../images/gimage12.jpg'; 

// 상세 정보 추가된 전체 이벤트 목록
const eventsWithDetails = [
  { 
    id: 0, 
    category: "국악 전통", 
    title: "정조 애민사상을 경기도에 담다 ", 
    date: "2025-06-27~28", 
    time: "19:00", 
    location:  "팔달 문화센타 예당마루", 
    image: jimage20,
    details: {
      subtitle: "The Calling Locus - 애민사상을 경기도에 담다",
      duration: "60분",
      organizer: "경기도",
      host: "The Calling Locus",
      director: "류재원",
      cast: "The Calling Locus (피리: 박상진, 대금: 한진슬, 해금: 조소연, 거문고: 박무겸, 장고: 함동우 등)",
      program: ["창덕궁을 출발하다: '취타'", "안양행궁에서 휴식을 취하다: '새타령'", "화성 행궁으로 출발하다: '김영재류 해금산조'", "화성행궁에서 진찬연을 베풀다: 12가사 中 권주가, 수연장지곡, 북청사자놀음", "낙성연을 축하하다: 탈놀이, 바람이, 축제"],
      venue_address: "경기도 수원시 팔달구 수원천로 336 (팔달문화센터)",
      transportation: "주차 공간이 혼잡하니 대중교통(버스, 지하철) 이용을 권장합니다. 팔달구청 또는 수원화성박물관 주차장 이용 가능.",
      description: "정조의 애민사상과 음악적 업적을 바탕으로 기획된 공연으로, 국악과 서양 클래식 전공자들이 함께하는 새로운 음악 공동체 '더콜링로커스'의 무대입니다. 무형유산의 아름다움과 예술성을 중심으로 전통문화를 널리 알리고자 합니다."
    }
  },
  { id: 0, category: "국악 전통", title: "2025 국가무형유산 거문고산조 김영재 보유자 공개행사 ", date: "2025-06-27", time: "19:00", location:  "한국의문화의 집 KOUS", image: jimage21 },
  { 
    id: 36, 
    category: "국악 전통", 
    title: "2025 토요국악동화", 
    date: "2025-03-08~12-27", 
    time: "매주 토요일 오후 2시", 
    location: "국립국악원 풍류사랑방", 
    image: toyoeventimage,
    details: {
      subtitle: "2025 토요국악동화",
      duration: "60분",
      organizer: "국립국악원",
      price: "A석 20,000원",
      age_rating: "12개월 이상",
      inquiry: "02-580-3300",
      description: "어린이들을 위한 국악 동화 공연입니다. 잔여석이 발생할 경우를 대비한 대기예약이 가능합니다. (문의: 02-580-3039)"
    }
  },
  { id: 1, category: "국악 찬양", title: "세상은 교회가 되고 교회는 세상이 되다", date: "2025-05-16", time: "20:00", location: "청운교회비전홀", image: gimage12 },
 { id: 1, category: "국악 찬양", title: "국악찬양의 여정과 실천의 제 양상", date: "2025-02-28", time: "10:00-16:00", location: "백석예술대학교 예랑홀", image: gimage12 },
  // ... 나머지 이벤트 목록 (원본 그대로)
];

const PerformanceDetail = () => {
  const { eventId } = useParams();
  const event = eventsWithDetails.find(e => e.id.toString() === eventId);

  if (!event) {
    return <div className="text-white p-10 text-center">공연 정보를 찾을 수 없습니다.</div>;
  }

  const detailInfo = event.details;

  return (
    <div className="performance-detail-container bg-[#0d0d0d] text-white p-10 mx-auto max-w-5xl">
      <Link to="/" className="text-[#ff4a4a] hover:underline mb-8 block">← 목록으로 돌아가기</Link>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="md:w-1/3">
          <img src={event.image} alt={event.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl font-bold text-[#ff4a4a]">{event.title}</h1>
          {detailInfo?.subtitle && <h2 className="text-2xl text-gray-300 italic">{detailInfo.subtitle}</h2>}
          <div className="space-y-2 text-gray-400">
            <p><strong>공연 기간:</strong> {event.date}</p>
            <p><strong>공연 일시:</strong> {event.time}</p>
            <p><strong>공연 장소:</strong> {event.location} {detailInfo?.venue_address && `(${detailInfo.venue_address})`}</p>
            {detailInfo?.duration && <p><strong>관람 시간:</strong> {detailInfo.duration}</p>}
            {detailInfo?.organizer && <p><strong>주최:</strong> {detailInfo.organizer}</p>}
            {detailInfo?.host && <p><strong>주관:</strong> {detailInfo.host}</p>}
            {detailInfo?.price && <p><strong>가격:</strong> {detailInfo.price}</p>}
            {detailInfo?.age_rating && <p><strong>관람 등급:</strong> {detailInfo.age_rating}</p>}
            {detailInfo?.inquiry && <p><strong>문의:</strong> {detailInfo.inquiry}</p>}
            {detailInfo?.director && <p><strong>기획·예술감독·지휘:</strong> {detailInfo.director}</p>}
          </div>

          <hr className="border-gray-700 my-6" />

          {detailInfo?.description && (
            <div>
              <h3 className="text-2xl font-bold mb-3">공연 상세</h3>
              <p className="text-gray-300 leading-relaxed">{detailInfo.description}</p>
            </div>
          )}

          {detailInfo?.program && (
            <div>
              <h3 className="text-2xl font-bold mt-8 mb-3">프로그램</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {detailInfo.program.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          )}

          {detailInfo?.cast && (
            <div>
              <h3 className="text-2xl font-bold mt-8 mb-3">출연진</h3>
              <p className="text-gray-300">{detailInfo.cast}</p>
            </div>
          )}

          {detailInfo?.transportation && (
            <div>
              <h3 className="text-2xl font-bold mt-8 mb-3">교통편</h3>
              <p className="text-gray-300">{detailInfo.transportation}</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PerformanceDetail;
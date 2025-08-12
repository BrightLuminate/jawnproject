import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/PerformanceDetail.css"; // CSS 파일 경로 확인

// Import all images including jungo series
import jimage20 from '../images/jimage20.png';
import jimage21 from '../images/gimage13.jpeg';

import jungo2 from '../images/jungo2.png';
import jungo3 from '../images/jungo3.png';
import jungo4 from '../images/jungo4.png';
import jungo5 from '../images/jungo5.png';
import jungo6 from '../images/jungo6.png';
import jungo7 from '../images/jungo7.png';
import jungo8 from '../images/jungo8.png';
import jungo9 from '../images/jungo9.png';
import jungo10 from '../images/jungo10.png';
import jungo11 from '../images/jungo11.png';


// 상세 정보 추가된 전체 이벤트 목록
const eventsWithDetails = [
    // 다른 이벤트들도 필요하면 추가
  {
    id: 0,
    category: "국악 전통",
    title: "오래된 아름다움 앙상블된 아름 12가사",
    date: "2025-08-22",
    time: "19:30",
    location: "전통공연창작마루",
    image: jimage21, // 포스터 이미지로 가정
    details: {
      subtitle: "정가앙상블 이끌다 사옴",
      duration: "정보없음",
      organizer: "흉현수 12가사연구회",
      host: "The Calling Locus",
      director: "류재원",
      // 출연진 텍스트 정보
      cast: "흉현수, 박상진, 김성철, 류재원 (코러스: 흉현수, 이경연, 이가영, 안혜연 / 반주: 해금-김정우, 김소원, 김승리)",
      program: ["총면목", "백구사", "이부사", "수양산가", "양양가", "길군악", "처사가", "상사별곡", "권주가", "황계사", "죽지사", "매화가"],
      venue_address: "전통공연창작마루",
      transportation: "정보없음",
      description: "흉현수 12가사연구회는 2019년에 만들어진 정가앙상블 단체입니다. 국립국악원 우면산축제와 아시안게임 평창동계올림픽 문화행사 참여로 활동을 하였으며, 현재는 앙상블음악가와 정가의 전문가인 박윤식 교수님을 초빙하여 운영 중입니다. 흉현수 12가사연구회는 12가사 연주회를 더불어 노랫말이 없는 곡들도 연주하고 앙상블로 함께하는 음악을 만드는 것을 목표로 하고 있습니다. 또한, 이 시대와 소통할 수 있는 12가사 연구도 꾸준히 진행하고 있습니다. 많은 분들이 정가에 대해 이해하고 즐기실 수 있도록 노력할 것입니다.",
      detailImages: [jimage21,jungo9, jungo10], // 제공된 이미지 파일에 맞게 수정
      castImages: [jungo11], // 이미지 파일에 출연진 사진이 있지만, 변수가 따로 없어 일단 비워둠.
      // transportationImage: null
    }
  },

  {
    id: 2,
    category: "국악 전통",
    title: "정조 애민사상을 경기도에 담다",
    date: "2025-06-27~28",
    time: "19:00",
    location: "팔달 문화센타 예당마루",
    image: jimage20,
    details: {
      subtitle: "The Calling Locus - 애민사상을 경기도에 담다",
      duration: "60분",
      organizer: "경기도",
      host: "The Calling Locus",
      director: "류재원",
      // 출연진 텍스트 정보 (castImages가 별도로 이미지를 관리)
      cast: "The Calling Locus (피리: 박상진, 대금: 한진슬, 해금: 조소연, 거문고: 박무겸, 장고: 함동우 등)",
      program: ["창덕궁을 출발하다: '취타'", "안양행궁에서 휴식을 취하다: '해금, 거문고를 위한 2중주 '새타령'", "화성 행궁으로 출발하다: '김영재류 해금산조<자진모리, 단모리>'", "화성행궁에서 진찬연을 베풀다: 12가사 中 권주가, 수연장지곡, 북청사자놀음", "낙성연을 축하하다: 탈놀이, 바람이, 축제"],
      venue_address: "경기도 수원시 팔달구 수원천로 336 (팔달문화센터)",
      transportation: "주차 공간이 혼잡하니 대중교통(버스, 지하철) 이용을 권장합니다. 팔달문화센터 방문시 팔달구청 수원화성박물관 주차장을 이용하시기 바랍니다. 주차장이 매우 혼잡하여 대중교통을 이용하시기 바랍니다. 주차에 관한 문의는 받지 않습니다.",
      description: "정조를 문화의 왕이라고도 하고 아버지 사도세자와 어머니 혜경궁 홍씨에 대한 효심을 바탕으로 효의 왕이라고도 한다. 그리고 서얼허통정책, 금난전권, 자휼전칙, 탕평책 등 백성들을 펼쳤다.\n\n" + // 줄바꿈을 위해 \n\n 추가
                   "\"인간으로 태어나 어찌 귀한것이 있고 천한 것이 있겠느냐 이 세상에서 노비 보다 슬픈 존재는 없다. 고로 노비는 혁파 되어야 한다.\" 라는 말을 통해서 백성들에게 인권이라는 개념을 심어주고 더불어 잘사는 나라를 만들려 했던 개혁군주였다.",
      // 갤러리에 표시될 이미지들 (jimage20.png는 그대로 두고, jungo1~8은 .jpg로 변경)
      detailImages: [jimage20, jungo2, jungo3, jungo4, jungo5, jungo6, jungo7, jungo8],
      castImages: [jungo6, jungo7], // 출연진 이미지 추가 (jungo6, jungo7)
      transportationImage: jungo8 // 교통편 약도 이미지 추가 (jungo8)
    }
  },


];

const PerformanceDetail = () => {
  const { eventId } = useParams();
  const event = eventsWithDetails.find(e => e.id.toString() === eventId);

  // 현재 갤러리에 표시될 메인 이미지 상태 (초기값 설정)
  const [currentImage, setCurrentImage] = useState(event?.details?.detailImages[0] || event?.image);

  if (!event) {
    return <div className="performance-detail-container text-white p-10 text-center">공연 정보를 찾을 수 없습니다.</div>;
  }

  const detailInfo = event.details;

  // 카카오톡 오픈채팅방 링크


 

  return (
    <div className="performance-detail-container">
      <Link to="/" className="back-link">← 목록으로 돌아가기</Link>

      {/* 메인 이미지와 주요 정보 섹션 */}
      <div className="main-content-section">
        {/* 이미지 갤러리 영역 */}
        <div className="image-gallery">
          <div className="main-image-display">
            <img src={currentImage} alt={event.title} className="main-detail-image" />
          </div>
          {detailInfo?.detailImages && detailInfo.detailImages.length > 0 && (
            <div className="thumbnail-grid">
              {detailInfo.detailImages.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail-image ${currentImage === imgSrc ? 'active' : ''}`}
                  onClick={() => setCurrentImage(imgSrc)}
                />
              ))}
            </div>
          )}
        </div>

        {/* 공연 개요 정보 영역 */}
        <div className="overview-info">
          <h1 className="performance-title">{event.title}</h1>
          {detailInfo?.subtitle && <h2 className="performance-subtitle">{detailInfo.subtitle}</h2>}

          <div className="key-details-box">
            <p className="detail-line"><strong>공연 기간:</strong> {event.date}</p>
            <p className="detail-line"><strong>공연 일시:</strong> {event.time}</p>
            <p className="detail-line"><strong>공연 장소:</strong> {event.location} {detailInfo?.venue_address && `(${detailInfo.venue_address})`}</p>
            {detailInfo?.duration && <p className="detail-line"><strong>관람 시간:</strong> {detailInfo.duration}</p>}
            {detailInfo?.organizer && <p className="detail-line"><strong>주최:</strong> {detailInfo.organizer}</p>}
            {detailInfo?.host && <p className="detail-line"><strong>주관:</strong> {detailInfo.host}</p>}
            {detailInfo?.director && <p className="detail-line"><strong>기획·예술감독·지휘:</strong> {detailInfo.director}</p>}
            {detailInfo?.price && <p className="detail-line price-info"><strong>가격:</strong> {detailInfo.price}</p>}
            {detailInfo?.age_rating && <p className="detail-line"><strong>관람 등급:</strong> {detailInfo.age_rating}</p>}
            {detailInfo?.inquiry && <p className="detail-line"><strong>문의:</strong> {detailInfo.inquiry}</p>}
          </div>


        </div>
      </div>

      {/* 탭 메뉴를 통한 상세 정보 섹션 */}
      <div className="tabs-section">
        <TabbedContent detailInfo={detailInfo} />
      </div>
    </div>
  );
};

// TabbedContent 컴포넌트
const TabbedContent = ({ detailInfo }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div>
      <div className="tab-headers">
        <button
          className={`tab-header-button ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          공연 상세
        </button>
        {detailInfo?.program && (
          <button
            className={`tab-header-button ${activeTab === 'program' ? 'active' : ''}`}
            onClick={() => setActiveTab('program')}
          >
            프로그램
          </button>
        )}
        {detailInfo?.cast && ( // 출연진 정보가 있을 때만 탭 표시
          <button
            className={`tab-header-button ${activeTab === 'cast' ? 'active' : ''}`}
            onClick={() => setActiveTab('cast')}
          >
            출연진
          </button>
        )}
        {detailInfo?.transportation && (
          <button
            className={`tab-header-button ${activeTab === 'transportation' ? 'active' : ''}`}
            onClick={() => setActiveTab('transportation')}
          >
            교통편
          </button>
        )}
      </div>

      <div className="tab-content-display">
        {activeTab === 'description' && detailInfo?.description && (
          <div className="tab-pane">
            <h3 className="section-title">공연 상세 정보</h3>
            <p className="description-text">{detailInfo.description}</p>
          </div>
        )}
        {activeTab === 'program' && detailInfo?.program && (
          <div className="tab-pane">
            <h3 className="section-title">프로그램</h3>
            <ul className="program-list">
              {detailInfo.program.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        )}
        {activeTab === 'cast' && detailInfo?.cast && ( // 출연진 탭 내용
          <div className="tab-pane">
            <h3 className="section-title">출연진 소개</h3>
            <p className="cast-info">{detailInfo.cast}</p>
            {detailInfo?.castImages && detailInfo.castImages.length > 0 && (
                <div className="cast-images-grid">
                    {detailInfo.castImages.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`출연진 이미지 ${index + 1}`} className="cast-image" />
                    ))}
                </div>
            )}
            <p className="cast-note">※ 상세 출연진 정보는 현장 또는 주최 측 문의 바랍니다.</p>
          </div>
        )}
        {activeTab === 'transportation' && detailInfo?.transportation && (
          <div className="tab-pane">
            <h3 className="section-title">오시는 길 및 교통편</h3>
            <p className="transportation-info">{detailInfo.transportation}</p>
            {/* transportationImage 속성이 있을 경우에만 이미지 렌더링 */}
            {detailInfo?.transportationImage && (
              <div className="transportation-image-wrapper">
                <img src={detailInfo.transportationImage} alt="교통편 약도" className="map-image" />
                <p className="image-caption">위 약도를 참고하시어 대중교통 이용을 권장합니다.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceDetail;



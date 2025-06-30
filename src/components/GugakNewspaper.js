import React from 'react';
import '../css/GugakNewspaper.css';
import sinmungoImage from '../images/sinmungo.jpeg'; // 국민신문고 관련 이미지 불러오기
import Footer from './Footer'; // Footer 컴포넌트 불러오기

const GugakNewspaper = () => {
    return (
        <div className="kukmin-sinmungo">
            <div className="kukmin-sinmungo-container">
                <div className="banners">
        
                </div>
                <div className="kukmin-sinmungo-box">
                    <img src={sinmungoImage} alt="국민신문고" className="kukmin-sinmungo-image" />
                    <div className="kukmin-sinmungo-text-container">
                        <p>국민신문고는 국민과의 원활한 소통을 위해 만들어졌습니다. 이곳에서 민원 서비스 및 다양한 정보를 확인할 수 있습니다. 지금 바로 국민신문고를 통해 더 많은 서비스를 이용해 보세요!</p>
                        <a href="https://www.epeople.go.kr" target="_blank" rel="noopener noreferrer">
                            <button className="kukmin-sinmungo-button">국민신문고 바로가기</button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer /> {/* 하단 Footer 컴포넌트 */}
        </div>
    );
};

export default GugakNewspaper;

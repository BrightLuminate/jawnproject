import React from 'react';
import "../css/Greeting.css"; // CSS 파일을 추가하세요
import Won6 from '../images/Won6.jpeg'; // 이미지 파일 경로
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 스타일 임포트
import Footer from './Footer'; // Footer 컴포넌트 임포트

const Greeting = () => {
    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar */}

            {/* Main Greeting Content */}
            <div className="greeting-container">
                <div className="greeting-banner">
                    <h1>인사말</h1>
                </div>
         
                <div className="greeting-content" id="greeting">
                    <div className="greeting-text">
                        <h2>안녕하세요!</h2>
                        <p>서울대학교에서 해금을 전공한 음악박사 류재원 입니다.</p>
                        <p>해금은 한국의 전통 악기로, 그 고유의 음색과 깊은 감정 표현력으로 많은 사람들에게 사랑받고 있습니다. 제 음악의 여정은 어린 시절 시작되었으며, 그동안 다양한 경험을 통해 해금의 매력을 더 깊이 이해하게 되었습니다.</p>
                        <p>해금 연주뿐만 아니라, 그 음악적 가치를 널리 알리는 데에도 큰 관심을 가지고 있습니다. 전통 음악의 현대적 해석과 다양한 장르와의 융합을 통해 해금의 가능성을 탐구하고, 새로운 창작물을 선보이는 데 도전하고 있습니다. 또한, 해금의 아름다움과 깊이를 더 많은 사람들과 나누기 위해 다양한 공연과 교육 활동에 참여하고 있습니다.</p>
                        <p>저의 목표는 단순히 연주에 그치지 않고, 해금의 전통과 현대적 요소를 아우르는 다양한 프로젝트를 통해 한국 전통 음악의 발전에 기여하는 것입니다. 앞으로도 많은 분들과 함께 해금의 아름다움을 나누고, 그 매력을 더 많은 이들에게 전파할 수 있기를 바랍니다.</p>
                    </div>
                    <div className="greeting-image-container">
                        <div className="social-media-icons">
                            <a href="https://www.facebook.com/ryu.jaewon.56" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/ryu.jaewon.56/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@_thecallinglocus1442/videos" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://blog.naver.com/geumsa-haegeum" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-blog"></i>
                            </a>
                        </div>
                        <img src={Won6} alt="Ryu Jae Won" className="greeting-image" />
                        <p className='name'>無思 류재원</p>
                    </div>
                </div>
                <Footer /> {/* Footer 컴포넌트를 추가합니다 */}
            </div>
        </div>
    );
};

export default Greeting;

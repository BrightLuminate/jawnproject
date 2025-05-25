import React from 'react';
import '../css/EducationInquiry.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Curriculum = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path); // Navigate to the given path
    };

    return (
        <div className="education-inquiry">
            {/* Header Section */}
            <header className="program-header">
                <div className="header-bg">
                    <h1>교육/체험</h1>
                    <p>전통 예술의 멋과 가치를 함께합니다</p>
                </div>
            </header>

            {/* Main Content Section */}
            <div className="content-wrapper">
                <main className="program-content">
                    {/* Navigation Bar */}
                    <nav className="navbars">
                        <ul>
                            <li><Link to="/education-inquiry">모집요강</Link></li>
                            <li><Link to="/Curriculum">교육과정</Link></li>
                            <li><Link to="/Pricing">수강료안내</Link></li>
                            <li><Link to="/Online">온라인접수</Link></li>
                        </ul>
                    </nav>

                    {/* Introduction Section */}
                    <section className="program-section">
                        <h2>국악연수교육</h2>
                        <p>류재원교수님 함께하는 국악연수교육</p>
                    </section>

                    {/* Course Levels Section */}
                    <section className="course-levels">
                        <h3>교육과정</h3>
                        <div className="level">
                            <h4>초급반</h4>
                            <p><strong>연수기간:</strong> 6개월</p>
                            <p><strong>대상자:</strong> 연수를 희망하는 국악 입문자 또는 초급자</p>
                        </div>
                        <div className="level">
                            <h4>중급반</h4>
                            <p><strong>연수기간:</strong> 1년</p>
                            <p><strong>대상자:</strong></p>
                            <ul>
                                <li>등록일 현재 도립국악원의 국악연수 초급과정 이수자 또는 중급과정 수강 중인 자</li>
                                <li>중급 연수가 가능하며 담당교수의 추천(실기테스트 통해 검증받은 자)</li>
                            </ul>
                        </div>
                        <div className="level">
                            <h4>고급반</h4>
                            <p><strong>연수기간:</strong> 3년</p>
                            <p><strong>대상자:</strong></p>
                            <ul>
                                <li>등록일 현재 도립국악원의 국악연수 중급과정 이수자 또는 고급과정 수강 중인 자</li>
                                <li>고급과정 실력을 인증 받은 자 (수상, 교육 수료 확인증 등)</li>
                                <li>고급 연수가 가능하며 담당교수의 추천(실기테스트 통해 검증받은 자)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Overview Section */}
                    <section className="overview-section">
                        <h3>연수개요</h3>
                        <ul>
                            <li><strong>연수과정:</strong> 전주 13과목 (판소리, 고법, 거문고, 병창, 가야금, 해금, 대금, 무용, 풍물, 민요, 시조, 아쟁, 단소)</li>
                            <li><strong>25개반:</strong> 주간 17개반, 야간 8개반</li>
                            <li><strong>75강좌:</strong> 초·중·고급반</li>
                            <li><strong>교육운영:</strong> 주 2~3회 교육</li>
                            <li><strong>교육시간표:</strong> 2025년도 상반기 국악연수 시간표 바로가기</li>
                            <li><strong>개강일:</strong> 2025. 1. 6.(월)</li>
                            <li><strong>운영근거:</strong> 전북특별자치도립국악원 운영조례(제7조, 제22조) 및 같은 조례시행규칙(제8조, 제9조)</li>
                        </ul>
                    </section>

                    {/* Action Buttons Section */}
                    <section className="action-buttons">
                        <button onClick={() => handleButtonClick("/Curriculum")}>교육과정 상세보기</button>
                        <button onClick={() => handleButtonClick("/Online")}>온라인 접수하기</button>
                    </section>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Curriculum;

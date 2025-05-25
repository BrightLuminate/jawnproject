import React from 'react';
import '../css/EducationInquiry.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const EducationInquiry = () => {
    const navigate = useNavigate();

    // 버튼 클릭 시 경로로 이동하는 함수
    const handleButtonClick = (path) => {
        navigate(path); // 전달받은 경로로 이동
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

                    {/* Details Section */}
                    <section className="details-section">
                        <h3>국악연수교육은?</h3>
                        <p>
                            지난 1986년에 시작되어 35년의 역사와 내실을 자랑하는 전북특별자치도립국악원의 연수는 국악을 사랑하는 도민 누구나 쉽게 배울 수 있도록 공개되어 있으며, 교육과정은 국악 입문자부터 고급 기량의 연수자까지 수준에 따라 단계별로 교육내용이 차별화 되어 수강이 이루어집니다.
                        </p>
                        <p><strong>※ 도립국악원 증개축 공사기간 동안 국악연수 임시 운영</strong></p>
                    </section>

                    {/* Overview Section */}
                    <section className="overview-section">
                        <h3>연수개요</h3>
                        <ul>
                            <li><strong>연수과정:</strong> 전주 1과목 (해금)</li>
                            <li><strong>25개반:</strong> 주간 17개반, 야간 8개반</li>
                            <li><strong>75강좌:</strong> 초·중·고급반</li>
                            <li><strong>교육운영:</strong> 주 2~3회 교육</li>
                            <li><strong>교육시간표:</strong> 2025년도 상반기 국악연수 시간표 바로가기</li>
                            <li><strong>개강일:</strong> 2025. 1. 6.(월)</li>
                            <li><strong>운영근거:</strong> 전북특별자치도립국악원 운영조례(제7조, 제22조) 및 같은 조례시행규칙(제8조, 제9조)</li>
                        </ul>
                    </section>

                    {/* Recruitment Section */}
                    <section className="recruitment-section">
                        <h3>모집요강</h3>
                        <ul>
                            <li><strong>모집기간:</strong> 2024. 12. 10.(화) 09:30 ～ 12. 19.(목) 17:00</li>
                            <li><strong>연수자격:</strong> 모집기간 기준 9세 이상으로 국악연수가 가능한 자</li>
                            <li><strong>관.현악기 부문:</strong> 초등 4학년 이상 연수 가능</li>
                            <li><strong>전북특별자치도민:</strong> 도외 및 외국인 제외</li>
                            <li><strong>문의:</strong> 전북특별자치도립국악원 교육학예실 Tel. 063-290-6456</li>
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

export default EducationInquiry;

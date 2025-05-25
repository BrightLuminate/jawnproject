import React from 'react';
import '../css/EducationInquiry.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Pricing = () => {
    const navigate = useNavigate();

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

                    {/* Fee Information Section */}
                    <section className="details-section">
                        <h3>수강료 납부안내</h3>
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>수강료</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>해금</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>아쟁</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>대금</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>운영근거:</strong> </p>
                    </section>

                    {/* Refund Policy Section */}
                    <section className="refund-policy">
                        <h3>수강료 반환안내 (필독)</h3>
                        <ul>
                            <li>무통장입금 하신 분은 꼭 환불계좌를 등록해주세요. ( 마이페이지신청 / 예약 신청목록 또는 수강취소목록: "환불계좌" 버튼 클릭 )</li>
                            <li>수강개시 이후 취소 시 반환신청서를 사무국에 제출해야 하며, 당해 월 수강료는 반환되지 않습니다.</li>
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

export default Pricing;

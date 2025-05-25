import React, { useState } from 'react';
import '../css/EducationInquiry.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Online = () => {

    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        instrument: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('접수가 완료되었습니다!');
    
        try {
            const response = await fetch('http://localhost:5001/api/send-email', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                // 이메일 전송 성공
                navigate('/Receptionist');
            } else {
                const errorMessage = await response.text(); // 서버에서 반환한 오류 메시지
                alert('서버와의 연결에 문제가 있습니다: ' + errorMessage);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('서버와의 연결에 문제가 있습니다.');
        }
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

                    {/* Recruitment Details */}
                    <section className="recruitment-section">
                        <h3>모집요강</h3>
                        <ul>
                            <li><strong>모집기간:</strong> 2024. 12. 10.(화) 09:30 ～ 12. 19.(목) 17:00</li>
                            <li><strong>연수자격:</strong> 9세 이상 국악연수가 가능한 도민</li>
                            <li><strong>관.현악기 부문:</strong> 초등 4학년 이상 가능</li>
                            <li><strong>문의:</strong> Tel. 063-290-6456</li>
                        </ul>
                    </section>

                    {/* Online Registration Form */}
                    <section className="registration-form">
                        <h3>온라인 접수</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">이름</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">나이</label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="instrument">악기/분야</label>
                                <select
                                    id="instrument"
                                    name="instrument"
                                    value={formData.instrument}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">선택해주세요</option>
                                    <option value="판소리">판소리</option>
                                    <option value="고법">고법</option>
                                    <option value="가야금">가야금</option>
                                    <option value="해금">해금</option>
                                    <option value="대금">대금</option>
                                    <option value="무용">무용</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">이메일</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">기타 요청사항</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit">접수하기</button>
                        </form>
                    </section>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Online;

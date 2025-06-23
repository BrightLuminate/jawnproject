
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sitemaps.css';

const Sitemaps = () => {
    return (
        <div className="sitemap-container">
            <h1>사이트맵</h1>
            <div className="sitemap-section">
                <h2>소개</h2>
                <ul>
                    <li><Link to="/greeting">인사말</Link></li>
                    <li><Link to="/history">연혁</Link></li>
               
                </ul>
            </div>
             <div className="sitemap-section">
                <h2>참여</h2>
                <ul>
    
                    <li><Link to="/Communication">교수님과 대화</Link></li>
                    <li><Link to="/gugak-newspaper">국악 신문사</Link></li>
                </ul>
            </div>


            {/* <div className="sitemap-section">
                <h2>교육 활동</h2>
                <ul>
                    <li><Link to="/education-inquiry">교육문의</Link></li>
                    <li><Link to="/group-inquiry">단체문의</Link></li>
                </ul>
            </div> */}
            <div className="sitemap-section">
                <h2>연주단 소개</h2>
                <ul>
                    <li><Link to="/gugak-choir-introduction">국악창작악단</Link></li>
                    <li><Link to="/kim-young-jae-introduction">김영재류 해금산조보존회 소개</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Sitemaps;

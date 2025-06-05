import React, { useState } from 'react';
import '../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap,  faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../images/hegun copy.png';
// The problematic line 'import Navbar from './components/Navbar.js';' has been removed
// because this file itself defines the Navbar component.

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeDropdownItem, setActiveDropdownItem] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggle = (index) => {
        setActiveDropdown(prevIndex => (prevIndex === index ? null : index));
    };

    const handleDropdownItemClick = (index, item) => {
        setActiveDropdown(index);
        setActiveDropdownItem(item);
        setIsMobileMenuOpen(false); // 모바일에서 메뉴 클릭 시 닫힘
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const DropdownMenu = ({ index, title, items }) => (
        <div className='menu-item' onClick={() => handleToggle(index)}>
            {title}
            {activeDropdown === index && (
                <ul className="dropdown">
                    {items.map(({ name, path }) => (
                        <li key={name} className={`dropdown-item ${activeDropdownItem === name ? 'active' : ''}`}
                            onClick={() => handleDropdownItemClick(index, name)}>
                            <Link to={path}>{name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

    return (
        <nav className='navbar'>
            <div className="auth">
                <Link to="/sitemap" className='logins'>
                    <FontAwesomeIcon icon={faSitemap} /> 사이트맵
                </Link>
            </div>

            <div className='navbar-container'>
                <Link to="/" className='logo'>
                    <img src={logo} alt="Logo" />
                    Ryu Jae Won
                </Link>
                
                <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    {/* 닫기 버튼 (모바일 메뉴 내부) */}
                    {isMobileMenuOpen && (
                        <button className="close-button" onClick={toggleMobileMenu}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    )}

                    <DropdownMenu index={2} title="소개" items={[
                        { name: '인사말', path: '/greeting' },
                        { name: '연혁', path: '/history' },
                    ]} />

                    <DropdownMenu index={3} title="참여" items={[
                       { name: '교수님과의 대화', path: '/Communication' },
                        { name: '국악신문사', path: '/gugak-newspaper' }
                    ]} />

                    <DropdownMenu index={4} title="국악찬양단" items={[
                        { name: '국악찬양단 소개', path: '/gugak-choir-introduction' },
                    ]} />
                    <DropdownMenu index={5} title="김영재류 산조보존회" items={[
                        { name: '김영재류 산조보존회 소개', path: '/kim-young-jae-introduction' }
                    ]} />
                </div>

                {/* 모바일 화면에서만 햄버거 버튼 표시 */}
                <button className="hamburger" onClick={toggleMobileMenu} aria-label="메뉴 열기/닫기">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

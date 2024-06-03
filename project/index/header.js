import React, { useState } from 'react';
import './Header.css';
import appleLogo from '../apple-logo.png';

const Header = () => {
    const [selected, setSelected] = useState("홈");

    return (
        <header className="header">
            <div className="logo">
                <img src={appleLogo} alt="Apple Logo" />
                더더마켓
            </div>
            <nav className="nav">
                {["중고거래", "동네가게", "알바", "부동산 직거래", "중고차 직거래"].map(menu => (
                    <div 
                        key={menu} 
                        className={`nav-item ${selected === menu ? 'selected' : ''}`} 
                        onClick={() => setSelected(menu)}
                    >
                        {menu}
                    </div>
                ))}
            </nav>
            <div className="search-form">
                <input type="text" placeholder="물품이나 동네를 검색해보세요" />
                <button>검색</button>
            </div>
        </header>
    );
}

export default Header;

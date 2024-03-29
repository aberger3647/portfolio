import React from 'react';

const Header = ({ currentPage, handlePageChange }) => {
    return (
    <nav>
        <div>
            <h2 className='myName'>Alex Berger</h2>
        </div>
        <div className="navlinks">
            <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </div>
    </nav>
)};

export default Header;
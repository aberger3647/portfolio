import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Content({ currentPage }) {
    

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <Portfolio />;
                }
    };



    return (
    <div className="content">
        {renderPage()}
    </div>
)};


import React from 'react';

export default function About() {
    return (
    <div className="about">
        <h1>About</h1>
        <p className="abouttext">Alex Berger is a full-stack developer with a design background. Holds an intensive coding certificate from The University of Texas at Austin. Strengths in communication, research, and picking up new skills.</p>
        <p style={{textAlign: 'center'}}>aberger3647@gmail.com</p>
        <div className='contactLinks'>
        <a href="https://github.com/aberger3647" target="_blank" rel="noopener noreferrer" className='nav-link'>GitHub</a>
            <a href="https://www.linkedin.com/in/alexjberger/" target="_blank" rel="noopener noreferrer" className='nav-link'>LinkedIn</a>
            <a href="https://alexjberger.com" target="_blank" rel="noopener noreferrer" className='nav-link'>Design</a>
        </div>
        <div className="headshotdiv">
            <img src='./img/headshot.jpg' className='headshot' alt="Black and white headshot of Alex" />
        </div>
    </div>

    )
};


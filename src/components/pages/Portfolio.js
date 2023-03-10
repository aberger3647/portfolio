import React from 'react';
import Project from '../Project';

const Portfolio = () => {
    const projects = [
        {
            imgPath: './img/ghostbusters.png',
            title: 'Ghostbusters',
            github: 'https://github.com/aberger3647/cache-me-outside',
            liveApp: 'https://agile-peak-65135.herokuapp.com/',
            desc: 'A dating app that allows users to review dates. Contributed to visual design, front-end, and back-end code. Tools used: React, Express.js, Node.js, MongoDB, and Cloudinary.',
            alt: 'Screenshot of Ghostbusters app'
        },
        {
            imgPath: './img/plantparenthood.png',
            title: 'Plant Parenthood',
            github: 'https://github.com/aberger3647/plantparenthood',
            liveApp: 'https://plant-parenthood.herokuapp.com/',
            desc: 'Gardeners can manage their plants, their garden tasks, and record observations. Responsible for back-end code, visual design and front-end interactivity. Tools used: Express.js, Node.js, Handlebars, Day.js, Bootstrap',
            alt: 'Screenshot of Plant Parenthood app'
        },
        {
            imgPath:'./img/cinemate.png',
            title:'Cinemate',
            github: 'https://github.com/aberger3647/cinemate',
            liveApp: 'https://aberger3647.github.io/cinemate/',
            desc: 'Moviegoers can search by genre to view movie trailers and reviews via API and save favorites to a list. Responsible for front-end design and implementation. Tools used: Tailwind, YouTube API, TMDB API',
            alt: 'Screenshot of Cinemate app'
        },
        {
            imgPath: './img/weather.png',
            title: 'Weather Dashboard',
            github: 'https://github.com/aberger3647/weather-dashboard/',
            liveApp: 'https://aberger3647.github.io/weather-dashboard/',
            desc: 'A weather app that allows a user to input a city and view the current conditions along with a 5-day forecast. Tools used: OpenWeather API, Bootstrap',
            alt: 'Screenshot of Weather Dashboard app'
        },
        {
            imgPath: './img/booksearch.png',
            title: 'Book Search Engine',
            github: 'https://github.com/aberger3647/book-search-engine',
            liveApp: 'https://murmuring-stream-95769.herokuapp.com/',
            desc: 'Refactored a Google Books API search engine built with a RESTful API into a GraphQL API built with Apollo Server. Tools used: React, MongoDB, Node/Express',
            alt: 'Screenshot of Book Search app'
        },
        {
            imgPath: './img/employeetracker.png',
            title: 'Employee Tracker',
            github: 'https://github.com/aberger3647/employee-tracker',
            liveApp:'#',
            desc: 'A CLI using Node.js, Inquirer and MySQL that allows the user to view and manage the departments, roles, and employees in a company.',
            alt: 'Screenshot of Employee Tracker'
        },
        {
            imgPath: './img/readme.png',
            title: 'Readme Generator',
            github: 'https://github.com/aberger3647/readme-generator',
            liveApp: '#',
            desc: 'A generator using Node.js that takes user input to create a README.md.',
            alt: 'Screenshot of Readme Generator'
        }
    ]

    return (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="projects">
            {projects.map((project) => <Project key={project.title} imgPath={project.imgPath} title={project.title} github={project.github} liveApp={project.liveApp} desc={project.desc} alt={project.alt} />)}
        </div>
    </div>
)};

export default Portfolio;
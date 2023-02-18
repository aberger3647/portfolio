import React from 'react';
import Project from '../Project';

const Portfolio = () => {
    const projects = [
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
        // {
        //     imgPath:
        //     title:
        //     github:
        //     liveApp:
        //     desc:
        //     alt:
        // },
        // {
        //     imgPath:
        //     title:
        //     github:
        //     liveApp:
        //     desc:
        //     alt:
        // },
        // {
        //     imgPath:
        //     title:
        //     github:
        //     liveApp:
        //     desc:
        //     alt:
        // }
    ]

    return (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="projects">
            {projects.map((project) => <Project imgPath={project.imgPath} title={project.title} github={project.github} liveApp={project.liveApp} desc={project.desc} alt={project.alt} />)}
        </div>
    </div>
)};

export default Portfolio;
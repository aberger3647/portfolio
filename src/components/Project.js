import React from 'react';

const Project = ({ imgPath, title, github, liveApp, desc }) => {
    return (
        <div>
           <img src={imgPath} className="projthumb" />
           <h2>{title}</h2>
           <a href={github}>GitHub Repo</a>
           <a href={liveApp}>Live App</a>
           <p>{desc}</p>
        </div>
    )
}

export default Project;
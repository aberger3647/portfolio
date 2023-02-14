import React from 'react';
import Skill from '../Skill';

const Resume = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind', 'Node.js', 'Express.js', 'SQL', 'MySQL', 'MongoDB', 'Mongoose', 'NoSQL', 'React']

    return (
    <div className="resume">
        <h1>Resume</h1>
        <div className="skills">
            {skills.map((skill) => <Skill skill={skill} />)}
        </div>
    </div>
)};

export default Resume;
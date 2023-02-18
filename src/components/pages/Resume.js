import React from 'react';
import Skill from '../Skill';

const Resume = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind', 'Node.js', 'Express.js', 'SQL', 'MySQL', 'MongoDB', 'Mongoose', 'NoSQL', 'React']

    return (
    <div className="resume">
        <h1>Proficiencies</h1>
        <div className="skills">
            {skills.map((skill) => <Skill skill={skill} />)}
        </div>
        <div className='resumelinkdiv'>
            <a href='./img/AlexBergerResume2023.pdf' className='resumelink' target='_blank'><p className='resumetext'>Download Resume</p></a>
        </div>
    </div>
)};

export default Resume;
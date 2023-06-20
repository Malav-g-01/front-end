import React from 'react';
import shapeSvg from './Project.svg';

const Project = () => {
    return (
        <div className="project">
            <img className='projectIcon' src={shapeSvg} alt="Shape" />
            <span className='projectText'>Project M.</span>
        </div>
    );
};

export default Project;
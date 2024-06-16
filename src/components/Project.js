import React from 'react';
import Image from '../Images/w32npbAL9OVZHTga.jpg';

function Project() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col box">
                    <img src={Image} alt="Descriptiom" className="center-image" />
                    <h3 className="project-title">Project Title 1</h3>
                    <p className="project-description">This is a brief description of Project 1.</p>
                </div>
                <div className="col box">
                    <img src={Image} alt="Myproject" className="center-image" />
                    <h3 className="project-title">Project Title 2</h3>
                    <p className="project-description">This is a brief description of Project 2.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;

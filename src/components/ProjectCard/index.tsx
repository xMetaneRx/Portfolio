import React from 'react';
import './index.scss';

const ProjectCard = ({project}: any = {}) => {
    const {name, description, html_url, homepage} = project;

    return (
        <div className="project">
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={html_url}>Project</a>
            <a href={homepage}>Demo</a>
        </div>
    )
}

export default ProjectCard;
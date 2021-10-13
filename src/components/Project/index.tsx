import React, {useState, useEffect} from 'react';
import ProjectCard from "../ProjectCard";
import './index.scss';

const Project = () => {
    const [projects, setProjects] = useState<[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/MetaneRuS/repos')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className="projects">
            {projects.map(project => project['homepage'] !== null && project['homepage'] !== '' && <ProjectCard key={project['id']} project={project} />)}
        </div>
    )
}

export default Project;
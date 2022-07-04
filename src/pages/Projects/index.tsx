import React, { useEffect } from "react";
import Project from "../../components/Project";

function Projects() {
    useEffect(() => {
        document.title = "Projects";
    }, []);

    return <Project />;
}

export default Projects;

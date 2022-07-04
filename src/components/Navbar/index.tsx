import React from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Overview
            </Link>
            <Link
                to="/repositories"
                className={
                    location.pathname === "/repositories" ? "active" : ""
                }
            >
                Repositories
            </Link>
            <Link
                to="/projects"
                className={location.pathname === "/projects" ? "active" : ""}
            >
                Projects
            </Link>
            <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
            >
                Contact me
            </Link>
        </nav>
    );
};

export default Navbar;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Repositories from "./pages/Repositories";
import ContactMe from "./pages/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import * as Icon from "react-feather";

function App() {
    return (
        <div className="App">
            <Router>
                <nav className="main__nav">
                    <div>
                        <Icon.GitHub color="white" size={24} />
                        <p className="hidden-mobile">Pulls</p>
                        <p className="hidden-mobile">Issues</p>
                        <p className="hidden-mobile">Marketplace</p>
                        <p className="hidden-mobile">Explore</p>
                    </div>
                    <div>
                        <Icon.Bell color="white" size={18} />
                        <Icon.Plus color="white" size={18} />
                        <Icon.User color="white" size={18} />
                    </div>
                </nav>
                <div className="container">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="content">
                        <Navbar />
                        <Switch>
                            <Route path="/" exact>
                                <Overview />
                            </Route>
                            <Route path="/projects" exact>
                                <Projects />
                            </Route>
                            <Route path="/repositories" exact>
                                <Repositories />
                            </Route>
                            <Route path="/contact" exact>
                                <ContactMe />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;

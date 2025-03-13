import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Atharva from './images/Atharva.jpg';
import AboutMe from './AboutMe';
import Skills from './Skills';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Atharva Kanase</h1>
                    <img src={Atharva} alt="Atharva Kanase" className="profile-photo" />
                    <p className="welcome-text">Welcome to my portfolio website!</p>
                    <div>
                        <Link to="/aboutme" className="button">About Me</Link>
                        <Link to="/skills" className="button">View My Skills</Link>
                    </div>
                </header>

                <Routes>
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

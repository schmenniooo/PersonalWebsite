
import LandingView from './components/landing/LandingView.jsx'
import Header from './components/header/Header.jsx'
import MainView from './components/routes/main/MainView.jsx'
import CareerView from './components/routes/career/CareerView.jsx'
import SkillsView from "./components/routes/skills/SkillsView.jsx";
import ProjectsView from './components/routes/projects/ProjectsView.jsx'
import Footer from './components/footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useState} from "react";

function App() {

    const [showLanding, setShowLanding] = useState(true);

    const handleLanding = () => {
        setShowLanding(false);
    }

    return (
        <BrowserRouter>
            {showLanding ? (
                <LandingView onClose={handleLanding} />
            ) : (
                <div className="app-container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainView />} />
                        <Route path="/career" element={<CareerView />} />
                        <Route path="/skills" element={<SkillsView />} />
                        <Route path="/projects" element={<ProjectsView />} />
                    </Routes>
                    <Footer />
                </div>
            )}
        </BrowserRouter>
    )
}

export default App

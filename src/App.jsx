
import Landing from './components/landing/landing.jsx'
import Header from './components/header/Header.jsx'
import MainContainer from './components/routes/main/mainContainer.jsx'
import CareerContent from './components/routes/career/career.jsx'
import Skills from "./components/routes/skills/skills.jsx";
import Projects from './components/routes/projects/projects.jsx'
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
                <Landing onClose={handleLanding} />
            ) : (
                <div className="app-container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainContainer />} />
                        <Route path="/career" element={<CareerContent />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                    <Footer />
                </div>
            )}
        </BrowserRouter>
    )
}

export default App

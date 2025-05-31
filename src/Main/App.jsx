
import Landing from '../components/landing/landing.jsx'
import Header from '../components/header/Header.jsx'
import DefaultMainContainer from '../components/main/defaultMainContainer.jsx'
import CareerContent from '../components/career/career.jsx'
import Skills from "../components/skills/skills.jsx";
import Projects from '../components/projects/projects.jsx'
import Footer from '../components/footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        /*<BrowserRouter>
            <div className="app-container">
                <Header/>
                <div className="content-wrapper" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <Routes>
                        <Route path="/" element={<DefaultMainContainer />} />
                        <Route path="/career" element={<CareerContent />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>*/
        <Landing/>
    )
}

export default App

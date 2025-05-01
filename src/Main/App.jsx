
import Header from '../header/Header.jsx'
import DefaultMainContainer from '../defaultMainContainer/defaultMainContainer.jsx'
import CareerContent from '../career/career.jsx'
import Projects from '../projects/projects.jsx'
import Footer from '../footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header/>
                <div className="content-wrapper" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <Routes>
                        <Route path="/" element={<DefaultMainContainer />} />
                        <Route path="/career" element={<CareerContent />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App

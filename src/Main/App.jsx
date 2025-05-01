
import Header from '../header/Header.jsx'
import DefaultMainContainer from '../defaultMainContainer/defaultMainContainer.jsx'
import CareerContent from '../career/career.jsx'
import Projects from '../projects/projects.jsx'
import Footer from '../footer/Footer.jsx'

function App() {
    return (
        <div className="app-container">
            { Header()}
            { CareerContent()}
            { Footer()}
        </div>
    )
}

export default App

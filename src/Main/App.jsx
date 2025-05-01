
import Header from '../header/Header.jsx'
import DefaultMainContainer from '../defaultMainContainer/defaultMainContainer.jsx'
import careerContent from '../career/career.jsx'
import Footer from '../footer/Footer.jsx'

function App() {

    return (
        <div className="app-container">
            { Header()}
            { careerContent()}
            { Footer()}
        </div>
    )
}

export default App

import Header from '../header/Header.jsx'
import DefaultMainContainer from '../defaultMainContainer/defaultMainContainer.jsx'
import Footer from '../footer/Footer.jsx'

function App() {

    return (
        <div className="app-container">
            { Header()}
            { DefaultMainContainer()}
            { Footer()}
        </div>
    )
}

export default App
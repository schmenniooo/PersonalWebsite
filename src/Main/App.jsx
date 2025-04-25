
import Header from '../mainPage/Header.jsx'
import MainContainer from '../mainPage/MainContainer.jsx'
import Footer from '../mainPage/Footer.jsx'

function App() {

    return (
        <div className="app-container">
            { Header()}
            { MainContainer()}
            { Footer()}
        </div>
    )
}

export default App

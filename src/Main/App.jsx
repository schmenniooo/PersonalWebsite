
import Header from '../mainPage/header/Header.jsx'
import MainContainer from '../mainPage/mainContainer/MainContainer.jsx'
import Footer from '../mainPage/footer/Footer.jsx'

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

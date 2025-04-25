
import Header from './Header.jsx'
import MainContainer from './MainContainer.jsx'
import Footer from './Footer.jsx'

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

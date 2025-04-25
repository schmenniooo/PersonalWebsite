
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../../index.css'
import '../mainPage/header/header.css'
import '../mainPage/mainContainer/mainContainer.css'
import '../mainPage/footer/footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

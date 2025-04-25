
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../../index.css'
import '../header/header.css'
import '../defaultMainContainer/defaultMainContainer.css'
import '../footer/footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

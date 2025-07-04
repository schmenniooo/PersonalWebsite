
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../../index.css'
import '../components/header/header.css'
import '../components/routes/main/mainContainer.css'
import '../components/routes/career/career.css'
import '../components/footer/footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

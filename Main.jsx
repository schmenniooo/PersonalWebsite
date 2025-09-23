
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import './index.css'
import './src/components/header/Header.css'
import './src/components/routes/main/MainView.css'
import './src/components/routes/career/CareerView.css'
import './src/components/footer/Footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

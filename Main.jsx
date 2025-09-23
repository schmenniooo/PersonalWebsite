
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import './index.css'
import './src/components/header/header.css'
import './src/components/routes/main/mainContainer.css'
import './src/components/routes/career/career.css'
import './src/components/footer/footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

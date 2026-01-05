import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext/AuthProvider.jsx'
import TagManager from 'react-gtm-module'

// 2. Configura e inicializa (Idealmente usando la variable de entorno)
const tagManagerArgs = {
    gtmId: import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX' 
}

TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
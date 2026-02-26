import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Handle GitHub Pages routing with base path (only for subdomain, not custom domain)
const isCustomDomain = window.location.hostname === 'nvnssoftwaresolutions.com' || 
                       window.location.hostname === 'www.nvnssoftwaresolutions.com'
if (!isCustomDomain && window.location.pathname.includes('/?/')) {
  const basePath = import.meta.env.BASE_URL || '/nvns/'
  const path = window.location.pathname.split('/?/')[1]
  const newPath = basePath + path.replace(/~and~/g, '&').replace(/^\/+/, '')
  window.history.replaceState({}, '', newPath)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


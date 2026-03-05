import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Handle GitHub Pages routing for both custom domain and project pages
const isCustomDomain = window.location.hostname === 'globalitsolutions.in' || 
                       window.location.hostname === 'www.globalitsolutions.in'

// Handle custom domain redirect from 404.html (uses ?path= query parameter)
if (isCustomDomain) {
  const urlParams = new URLSearchParams(window.location.search)
  const path = urlParams.get('path')
  if (path && path !== '/') {
    window.history.replaceState({}, '', path)
  }
} 
// Handle the /?/ pattern from 404.html redirect (for project pages)
else if (window.location.pathname.includes('/?/')) {
  const path = window.location.pathname.split('/?/')[1]
  const cleanPath = '/' + path.replace(/~and~/g, '&').replace(/^\/+/, '')
  window.history.replaceState({}, '', cleanPath)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


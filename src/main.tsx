import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PersonaProvider } from './providers/PersonaProvider.tsx'
import "@fontsource/open-sans";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersonaProvider>
      <App />   
    </PersonaProvider>
  </React.StrictMode>,
)

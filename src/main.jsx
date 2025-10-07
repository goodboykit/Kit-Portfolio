import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

// Initialize AOS animation library
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

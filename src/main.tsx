import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import MainLoader from './components/MainLoader'

import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MainLoader/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)

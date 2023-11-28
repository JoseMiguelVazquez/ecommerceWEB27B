import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navBar/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import RoutesIndex from './routes/RoutesIndex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <RoutesIndex />
    </BrowserRouter>
  </React.StrictMode>,
)

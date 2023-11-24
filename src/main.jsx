import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navBar/NavBar.jsx'
import Items from './pages/items/Items.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Items />
  </React.StrictMode>,
)

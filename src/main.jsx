import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    
  <Header/>
    <Routes>

      <Route path='/' element={<App />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

    </Routes>

    
  </React.StrictMode>
  </BrowserRouter>
)

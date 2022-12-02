import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Login from './containers/User/Login/Login'
import Register from './containers/User/Register/Register'
import Films from './containers/Films/FilmsCards'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home/Home'
import Profile from './containers/User/Profile/Profile'
import FilmDetail from './containers/FilmDetail/FilmDetail.js'
import store from './app/store.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
  <Header/>
    <Routes>

      <Route path='/' element={<App />} />
      <Route path='/register' element={<Register />} />
      <Route path='/films' element={<Films/>} />
      <Route path='/filmDetails' element={<FilmDetail/>} />
      <Route path='/login' element={<Login />} />

      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />


    </Routes>
    <Footer/>
  
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
)

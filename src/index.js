import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Login from './containers/User/Login/Login.jsx'
import Register from './containers/User/Register/Register.jsx'
import Films from './containers/Films/FilmsCards.jsx'
import Footer from './components/Footer/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home/Home.jsx'
import Profile from './containers/User/Profile/Profile.jsx'
import FilmDetail from './containers/FilmDetail/FilmDetail.jsx'
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

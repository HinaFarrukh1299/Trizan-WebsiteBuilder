//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import axios from 'axios' ;
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true ;

function App() {
  

  return (
    <>
    <UserContextProvider>
    <Navbar />
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
    </UserContextProvider>
      
       
          
      
    
    </>
  )
}

export default App

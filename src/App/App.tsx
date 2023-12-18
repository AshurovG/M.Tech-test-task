import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.module.scss'
import MainPage from 'pages/MainPage'
import UsersPage from 'pages/UsersPage'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
      <ToastContainer autoClose={1500} pauseOnHover={false} />
    </>
  )
}

export default App

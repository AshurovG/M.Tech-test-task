import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setFileDataAction } from 'slices/MainSlice';
import './App.module.scss'
import MainPage from 'pages/MainPage'
import UsersPage from 'pages/UsersPage'

function App() {
  const dispatch = useDispatch();
  // const fileData = useFileData()
  
  useEffect(() => {
    const savedData = localStorage.getItem('data');
    console.log(savedData)
    if (savedData !== null) {
      dispatch(setFileDataAction(JSON.parse(savedData)));
    }
  }, [])

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

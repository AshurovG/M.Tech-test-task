import { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useFileData, setFileDataAction } from 'slices/MainSlice';
import './App.module.scss'
import MainPage from 'pages/MainPage'
import UsersPage from 'pages/UsersPage'

function App() {
  const dispatch = useDispatch();
  const fileData = useFileData();
  
  useEffect(() => {
    const savedData = localStorage.getItem('data');
    console.log(fileData)
    if (savedData) {
      dispatch(setFileDataAction(JSON.parse(savedData)));
    }
  }, [])

  return (
    <>
      <HashRouter>
        {localStorage.getItem('data') ?
        <Routes>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path="*" element={<Navigate to="/users" replace />} />
        </Routes>
        : 
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        }
      </HashRouter>
    </>
  )
}

export default App

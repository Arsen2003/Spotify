import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Regestration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'
import ConfirmPasswordReset from './pages/ConfirmPasswordReset'

const MainRoutes = () => {
  return (
    <div>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Regestration />} />
        <Route path="/login" element={<Login />} />
        <Route path='/passwordreset' element={<PasswordReset/>}/>
        <Route path='/confirmpasswordreset' element={<ConfirmPasswordReset/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import AuthMiddleware from './Middleware/AuthMiddleware'
import ReservationsScreen from './Screens/ReservationsScreen/ReservationsScreen'
import TreatmentsScreen from './Screens/TreatmentsScreen/TreatmentsScreen'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route element={<AuthMiddleware/>}>
          <Route path="/home" element={<HomeScreen/>}/>
          <Route path='/reservations' element={<ReservationsScreen/>}/>
          <Route path='/treatments' element={<TreatmentsScreen/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

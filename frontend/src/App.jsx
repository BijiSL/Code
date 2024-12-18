import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import MentorDashboard from './components/MentorDashboard'
import Addmentor from './components/Addmentor'
import Addproject from './components/Addproject'
import Main from './components/Main'
import Mainmen from './components/Mainmen'
import Submission from './components/Submission'
function App() {

  return (
    <>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mentor' element={<MentorDashboard/>}/>
      <Route path='/login' element={<Login/>}/>
     
    <Route path='/admin' element={<Main child={<AdminDashboard/>}/>}/> 
     
      <Route path='/addmentor' element={<Main child={<Addmentor/>}/>}/>
      <Route path='/project' element={<Main child={<Addproject/>}/>}/>
      <Route path='/sub' element={<Submission/>}/>

     </Routes>
    </>
  )
}

export default App

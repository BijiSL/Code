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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/admin' element={<AdminDashboard/>}/> */}
    <Route path='/admin' element={<Main child={<AdminDashboard/>}/>}/> 
      <Route path='/mentor' element={<Mainmen child={<MentorDashboard/>}/>}/>
      <Route path='/addmentor' element={<Main child={<Addmentor/>}/>}/>
      <Route path='/project' element={<Main child={<Addproject/>}/>}/>

     </Routes>
    </>
  )
}

export default App

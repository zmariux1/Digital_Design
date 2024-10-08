import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<Signin />}/>
        <Route path='/sign-out' element={<Signout />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/dashboard' element={<Dashboard />}/>

      </Routes>
    </BrowserRouter>
  )
}

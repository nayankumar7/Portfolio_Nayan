import { useState } from 'react'
import './App.css'
import Home from './Componants/HomePage/Home'
import { Routes, Route } from 'react-router-dom';
import Contact from './Componants/NavPage/Contact';
import About from './Componants/NavPage/About'
import Experience from './Componants/NavPage/Experience';
import Resume from './Componants/NavPage/Resume';
import Login from './Componants/LoginSignup/Login';
import SignUp from './Componants/LoginSignup/SignUp';
import Donate from './Componants/NavPage/Donate';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user' element={<SignUp/>}/>
          <Route path='/donate' element={<Donate/>}/>
        </Routes>
    </>
  )
}

export default App

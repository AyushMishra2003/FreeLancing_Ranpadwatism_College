import React, { useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './page/Home'
import Header from './component/Header'
import Popup from './component/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'
 const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Header/>
       <Routes>
           <Route  path='/' element={<Home/>}/>
       </Routes>
       <Popup/>
   
    </div>
  )
}

export default App

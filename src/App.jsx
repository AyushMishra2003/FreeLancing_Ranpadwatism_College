import React, { useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './page/Home'
import Header from './component/Header'
import Popup from './component/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './page/AboutUs'
import Footer from './component/Footer'
import AdministrativePage from './page/Administratice'
import ContactPage from './page/ContactPage'
import Gallery from './page/Gallery'
import NoticeBoard from './page/NoticeBoard'
import Academic from './page/Academic'
import ResultList from './page/Result'
import ComingSoon from './page/ComingSoon'
import ArchyaDetails from './page/CourseDetails/Archaya'
import ShastriDetails from './page/CourseDetails/Shastri'
import Shastri1 from './page/CourseDetails/Shastri1'
import Library from './page/Library/Library'
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
           <Route path='/about' element={<About/>}/>
           <Route path='/library' element={<Library/>}/>
           <Route path='/administrative' element={<AdministrativePage/>}/>
           <Route path='/contact' element={<ContactPage/>}/>
           <Route path='/gallery' element={<Gallery/>}/>
           <Route path='/notice' element={<NoticeBoard/>}/>
           <Route path='/academic' element={<Academic/>}/>
           <Route path='/result' element={<ResultList/>}/>
           <Route path='/comingSoon' element={<ComingSoon/>}/>
           <Route path='/cousre/archya' element={<ArchyaDetails/>}/>
           <Route path='/cousre/shastri' element={<Shastri1/>}/>
       </Routes>
       <Popup/>
       <Footer/>
    </div>
  )
}

export default App

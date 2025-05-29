import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
const App=(()=>{
  return(
    <div>
      <Navbar/>
      {/* <Services/>
      <Contact/> */}



      <Routes>

        <Route path='/About' element = {<About/>}></Route>
        <Route path='/Services' element = {<Services/>}></Route>
        <Route path='/Contact' element = {<Contact/>}></Route>

  
      </Routes>
    </div>
  )
})

export default App;
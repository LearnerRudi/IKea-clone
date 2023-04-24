import React from 'react'
import {Navbar} from '../components/HomePage/component/Navbar'
import Footer from '../components/HomePage/component/Footer'
import Home from '../components/HomePage/component/Home'
function HomePage() {
  return (
    <div>
      <Navbar/>
        <Home/>
       <Footer/>
    </div>
  )
}

export default HomePage
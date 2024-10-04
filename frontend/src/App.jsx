import React from 'react'
import Home from './pages/home'
import Course from './pages/course'
import Navbar from './components/navbar'
import Productpage from './pages/productpage'


const App = () => {
  return (
    <body className='relative h-full'>
      <Navbar/>
      {/* <Home/> */}
      {/* <Course/> */}
      <Productpage/>
    </body>
  )
}

export default App

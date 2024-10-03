import React from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'
import development from '../assets/development.png'
import data from '../assets/data.png'
import design from '../assets/design.png'

const home = () => {
  return (
    <div className='bg-gradient-to-r from-blue-950 via-sky-600 to-sky-500 h-screen'>
      <Navbar/>
      <div className="hero relative clippath2 bg-slate-900 h-96  w-screen -mt-40 flex items-end justify-center">
       <div className='h-1/2 w-5/6 md:text-8xl text-3xl font-extrabold text-white font-mono text-center'>
          COURSES FOR YOU
       </div>
      </div>
      <div className='flex w-screen justify-evenly'>
        <Card image={development} title="DEVELOPMENT"/>
        <Card image={data} title="DATA-SCIENCE"/>
        <Card image={design} title="DESIGNING"/>
        
      </div>
    </div>
  )
}

export default home

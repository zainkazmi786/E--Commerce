import React from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'

const home = () => {
  return (
    <div className='bg-gradient-to-r from-blue-950 via-sky-600 to-sky-500 h-screen'>
      <Navbar/>
      <div className="hero relative clippath2 bg-slate-900 h-96  w-screen -mt-40">
       
      </div>
      <div className='flex w-screen justify-evenly'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default home

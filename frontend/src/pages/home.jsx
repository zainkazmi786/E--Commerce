import React from 'react'

import Card from '../components/card'
import development from '../assets/development.png'
import data from '../assets/data.png'
import design from '../assets/design.png'
import logo from '../assets/logo.png'

const home = () => {
  return (
    <body className='bg-gradient-to-r from-blue-950 via-sky-600 to-sky-500'>
    
      <div className="hero relative clippath2 bg-slate-900 h-96  w-screen -mt-28 flex items-center justify-evenly">
        <div className='h-1/2 md:text-8xl text-3xl font-extrabold text-white font-mono text-center pt-24'>
          COURSES FOR YOU
        </div>
        <div className='w-20 relative h-20 scale-150 mt-20'>
          <div className='absolute w-full h-1/2 -bottom-2.5 right-1 clippath1 bg-emerald-400'></div>
          <img className='absolute z-10' src={logo} alt="" />
        </div>
      </div>
      <div className='flex w-screen justify-evenly'>
        <Card image={development} title="DEVELOPMENT" />
        <Card image={data} title="DATA-SCIENCE" />
        <Card image={design} title="DESIGNING" />

      </div>
    </body>
  )
}

export default home

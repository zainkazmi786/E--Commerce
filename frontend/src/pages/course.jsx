import React from 'react'

import Product from '../components/product'

const course = () => {
  return (
    <div>
    
      <div className="hero w-5/6 flex mx-auto">
        <div className='left w-1/2 flex flex-col gap-20 mt-10 border-2'>
          <div className='heading text-4xl font-semibold'>
            DEVELOPMENT COURSES

          </div >
          <div className='products flex flex-col gap-12'>
              <Product/>
              
          </div>

        </div>
        <div className='right'></div>

      </div>
      {/* <Product/> */}
    </div>
  )
}

export default course

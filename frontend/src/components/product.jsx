import React from 'react'
import cart from "../assets/cart.png"
import star from '../assets/star.png'

const product = () => {
    return (
        <div className='w-[500px]'>
            <div class="flex flex-col">
                <div class="bg-gradient-to-r from-blue-700 via-sky-600 to-sky-500 shadow-md rounded-3xl p-4  hover:scale-105 hover:shadow-md hover:shadow-black transition-all duration-300">
                    <div class="flex-none lg:flex">
                        
                        <div class="flex-auto ml-3 justify-evenly py-2">
                            <div class="flex flex-wrap">
                              
                                <h2 class="flex-auto text-2xl text-white font-medium">Front End Development</h2>
                            </div>
                            <p class="mt-3"></p>
                            <div className='text-sky-200 text-lg'>
                                <p>HTML, CSS and JavaScript</p>
                            </div>
                            <div class="flex p-4 pb-1 mt-2 border-t border-slate-100 "></div>
                            <div class="flex space-x-3 text-sm font-medium">
                                <div class="flex-auto flex space-x-3">
                                    <div
                                        class=" text-black rounded-md justify-between flex flex-col">
                                        <div className='flex gap-2 text-white items-center'>
                                            <span className='font-bold text-lg'>4.5</span>
                                            <div className='flex stars gap-1'>
                                                <img className='h-4' src={star} alt="" />
                                                <img className='h-4' src={star} alt="" />
                                                <img className='h-4' src={star} alt="" />
                                                <img className='h-4' src={star} alt="" />
                                            </div>

                                        </div>
                                        <span className='text-sm font-bold text-white'> Begineer - 15 Lectures - 10 hours</span>
                                    </div>
                                </div>
                                <button
                                    class="mb-2 md:mb-0 hover:bg-sky-200 px-5 h-12 shadow-sm hover:text-green-500 rounded-full bg-gray-800 flex items-center text-white transition-all duration-300 font-bold text-xs"
                                    type="button" aria-label="like">
                                    <span>Rs.15000/- </span>
                                    <img className='h-7' src={cart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default product

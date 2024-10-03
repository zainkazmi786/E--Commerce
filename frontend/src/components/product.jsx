import React from 'react'
import cart from "../assets/cart.png"
import star from '../assets/star.png'

const product = () => {
    return (
        <div className='h-72 w-[700px]'>
            <div class="flex flex-col">
                <div class="bg-gradient-to-r from-blue-400 via-sky-600 to-sky-500 shadow-md rounded-3xl p-4  hover:scale-105 hover:shadow-md hover:shadow-black transition-all duration-300">
                    <div class="flex-none lg:flex">
                        <div class=" h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
                            <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                                alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                        </div>
                        <div class="flex-auto ml-3 justify-evenly py-2">
                            <div class="flex flex-wrap">
                                <div class="w-full flex-none text-sm text-blue-200 font-medium ">
                                    Shop
                                </div>
                                <h2 class="flex-auto text-4xl text-white font-medium">Front End Development</h2>
                            </div>
                            <p class="mt-3"></p>
                            <div className='text-sky-200 text-lg'>
                                <p>HTML, CSS and JavaScript</p>
                            </div>
                            <div class="flex p-4 pb-1 mt-2 border-t border-slate-100 "></div>
                            <div class="flex space-x-3 text-sm font-medium">
                                <div class="flex-auto flex space-x-3">
                                    <div
                                        class=" tracking-wider text-black rounded-md justify-between flex flex-col">
                                        <div className='flex gap-2 text-white items-center'>
                                            <span className='font-bold text-lg'>4.5</span>
                                            <div className='flex stars gap-1'>
                                                <img className='h-4' src={star} alt="" />
                                                <img className='h-4' src={star} alt="" />
                                                <img className='h-4' src={star} alt="" />
                                                <img className='h-4' src={star} alt="" />
                                            </div>

                                        </div>
                                        <span className='text-sm font-bold'>Begineer - 15 Lectures - 10 hours</span>
                                    </div>
                                </div>
                                <button
                                    class="mb-2 md:mb-0 bg-sky-200 px-5 py-2 shadow-sm tracking-wider text-green-500 rounded-full hover:bg-gray-800 flex items-center gap-3 hover:text-white transition-all duration-300 font-bold text-lg"
                                    type="button" aria-label="like">Rs. 15000/-<img className='h-9' src={cart} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default product

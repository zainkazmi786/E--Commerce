import React from 'react'
import star from '../assets/star.png'
import tick from '../assets/tick.png'

const productpage = () => {
    return (

        <body className=" w-full flex flex-col gap-12">

            <div className="px-20 pt-14 flex flex-wrap w-full">

                <div className="w-1/3 md:w-1/2 pr-10 flex flex-col gap-5">
                    <h2 className="text-3xl font-bold mb-2">Front-End Development</h2>

                    <div className="mb-4">
                        <span className="text-3xl font-bold mr-2">Rs.15000/-</span>
                        <span className="text-gray-500 line-through">Rs.20000</span>
                    </div>
                    <div className='flex  gap-3 items-center'>
                        <div className='font-bold text-lg'>4.6</div>
                        <div className="stars flex">

                            <img className='h-4' src={star} alt="" />
                            <img className='h-4' src={star} alt="" />
                            <img className='h-4' src={star} alt="" />
                            <img className='h-4' src={star} alt="" />
                        </div>
                    </div>



                    {/* <div className="mb-6">
                            <label for="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" min="1" value="1"
                                className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div> */}
                    <div className="overview text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laborum temporibus libero maiores sequi atque perspiciatis voluptatem. Non exercitationem sapiente animi consequuntur expedita, modi hic saepe suscipit autem rerum, nesciunt ab praesentium temporibus corporis dicta error blanditiis excepturi ipsa minima at alias corrupti veritatis placeat.
                    </div>

                    <div className="flex gap-4 my-6">
                        <button
                            className="bg-slate-900 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            Add to Cart
                        </button>
                        <button
                            className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            Wishlist
                        </button>
                    </div>

                </div>
                <div className=' bg-slate-900 text-white p-10 rounded-2xl flex flex-col gap-5 w-1/2 h-96'>
                    <h3 className="text-5xl font-semibold mb-2">Curriculum</h3>
                    <ul className="list-inside list-none text-xl">
                        <li>Industry-leading noise cancellation</li>
                        <li>30-hour battery life</li>
                        <li>Touch sensor controls</li>
                        <li>Speak-to-chat technology</li>
                    </ul>
                </div>
            </div>
           
            <div class="flex justify-center gap-4 mb-6 bg-slate-900 w-full p-10">
                <div class="flex w-full justify-evenly">
                    {/* <!-- Card 1 --> */}
                    <div class="bg-sky-200 shadow-md rounded-lg p-6 flex flex-col items-center w-72">
                        <h2 class="text-gray-900 font-bold text-md">Lectures</h2>
                        <p class="text-3xl font-bold">15</p>
                        <span class="text-black text-md font-semibold mt-1">Understandable</span>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div class="bg-sky-200 shadow-md rounded-lg p-6 flex flex-col items-center w-72">
                        <h2 class="text-gray-900 font-bold text-md">Hours</h2>
                        <p class="text-3xl font-bold">18</p>
                        <span class="text-black text-md font-semibold mt-1">With Exercises</span>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div class="bg-sky-200 shadow-md rounded-lg p-6 flex flex-col items-center w-72">
                        <h2 class="text-gray-900 font-bold text-md">Certification</h2>
                        <div className='h-9 flex items-center'>

                        <img src={tick} className='h-7' alt="" />
                        </div>
                        <span class="text-black text-md font-semibold mt-1">100% guaranteed</span>
                    </div>
                </div>
            </div>



        </body>


    )
}

export default productpage

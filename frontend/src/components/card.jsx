import React from 'react'
import { useEffect } from 'react';

const Card = ({ image, title }) => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap";
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    return (
        <div className='card h-96 w-96 gradient-box rounded-3xl relative flex justify-center items-center scale-95 group'>
            {/* Inner content */}
            <div className='h-80 w-80 bg-slate-900 rounded-3xl shadow-lg shadow-black flex items-center justify-evenly flex-col transition-all duration-300 group-hover:scale-110'>
                <img className='w-3/5' src={image} alt={title} />
                <div className='text-white font-bold text-4xl font-mono w-full text-center tracking-wider' style={{ fontFamily: "Source Code Pro" }}>
                    {title}
                </div>
            </div>

            {/* Absolute overlay div */}
            <div className='absolute bg-black rounded-3xl h-80 w-80 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-80'>
            </div>
                <button class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-transparent border-white border font-bold rounded-lg hover:shadow-md hover:shadow-white z-10 opacity-0  group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black  text-white tracking-wider">
                    EXPLORE
                </button>
        </div>

    )
}

export default Card

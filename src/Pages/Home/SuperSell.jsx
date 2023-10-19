import React from 'react';
import { Link } from 'react-router-dom';

const SuperSell = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/tmSDJ1d/Super-sell-min.jpg')] bg-cover bg-center bg-no-repeat">
            <div className='py-28 px-3 md:px-8 lg:px-32'>
                <h1 className='text-outline text-6xl md:text-[110px] font-semibold'>20% OFF</h1>
                <h3 className='text-5xl font-semibold text-white'>OUR LATEST ONLINE DEALS</h3>
                <p className='text-gray-400 text-xl my-6'>This offer is valid from 20 October 2023 to 5 May 2024</p>


                <Link to='/' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#FF4D24] rounded-md shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FF4D24] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease uppercase">view more</span>
                    <span className="relative invisible uppercase">View more</span>
                </Link>


            </div>
        </div>
    );
};

export default SuperSell;
import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

const Services = () => {
    // <FaRegDotCircle className='text-[#FF4D24]'></FaRegDotCircle>
    return (
        <div className='mt-32 max-w-6xl mx-auto px-3 md:px-8 lg:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                <div className='lg:text-end'>
                    <div >
                        <h2 className='font-semibold text-xl 
                        flex items-center justify-end flex-row-reverse lg:flex-row'>
                            Experience Support Team
                            <span className='lg:ms-6 mr-6 lg:mr-0'><FaRegDotCircle className='text-[#FF4D24]'></FaRegDotCircle></span>
                        </h2>
                        <p className='lg:mr-10 ms-10 lg:ms-0 my-4'>Our Expert Support Team is your dedicated resource for personalized assistance and guidance throughout your car buying journey.</p>
                    </div>
                    <div className='my-12'>
                        <h2 className='font-semibold text-xl 
                        flex items-center justify-end flex-row-reverse lg:flex-row'>
                            Handle emergency situations
                            <span className='lg:ms-6 mr-6 lg:mr-0'><FaRegDotCircle className='text-[#FF4D24]'></FaRegDotCircle></span>
                        </h2>
                        <p className='lg:mr-10 ms-10 lg:ms-0 my-4'>In unforeseen situations, our Emergency Response service is here to provide you with peace of mind.</p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl f
                        flex items-center justify-end flex-row-reverse lg:flex-row'>
                            Insurance Included
                            <span className='lg:ms-6 mr-6 lg:mr-0'><FaRegDotCircle className='text-[#FF4D24]'></FaRegDotCircle></span>
                        </h2>
                        <p className='lg:mr-10 ms-10 lg:ms-0 my-4'>We provide insurance coverage that safeguards your vehicle during the selling process, from listing to the final handover.</p>
                    </div>
                </div>
                <div className=' lg:flex items-center md:hidden my-6 lg:my-0'>
                    <img src="https://i.ibb.co/68NLXMh/4.png" alt="" />
                </div>
                <div>
                    <div >
                        <h2 className='font-semibold text-xl flex items-center'>
                            <span className='mr-6'><FaRegDotCircle className='text-[#FF4D24]'></FaRegDotCircle></span>
                            Hight technology instrument
                        </h2>
                        <p className='ms-10 my-4'>When you choose our "Insurance Included" service, you can sell your car with confidence, knowing that you're covered.</p>
                    </div>
                    <div className='my-12'>
                        <h2 className='font-semibold text-xl flex items-center'>
                            <span className='mr-6'><FaRegDotCircle className='text-[#FF4D24]'></FaRegDotCircle></span>
                            Access control system
                        </h2>
                        <p className='ms-10 my-4'>Our Access Control System ensures the security and integrity of your car buying process.</p>
                    </div>
                    <div >
                        <h2 className='font-semibold text-xl flex items-center'>
                            <span className='mr-6'><FaRegDotCircle className='text-[#FF4D24]'></FaRegDotCircle></span>
                            Online 24/7 Available
                        </h2>
                        <p className='ms-10 my-4'>With Online 24/7 Availability, you have the freedom and flexibility to sell your car at your own pace.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Services;
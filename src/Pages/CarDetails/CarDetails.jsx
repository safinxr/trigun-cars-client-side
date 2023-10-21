import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { ContextAuth } from '../../Context/Context';

const CarDetails = () => {
    const {user} = useContext(ContextAuth)
    const { id } = useParams()
    const [car, setCar] = useState();
    useEffect(() => {
        fetch(`http://localhost:3000/cardata/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    const addToCart = () => {
        const userEmail = user.email
        car.email = userEmail
        fetch('http://localhost:3000/addtocart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    e.target.reset()
                };
            })
    }

    return (
        <div className="hero min-h-screen bg-white ">
            <div className="hero-content flex-col  w-full lg:flex-row max-w-6xl mx-auto items-start px-3 md:px-8 lg:px-0 ">
                <img src={car?.img} className="max-w-3xl w-full rounded-lg shadow-2xl" />
                <div className='p-8 lg:ms-4 rounded-xl  bg-white w-full shadow-2xl'>
                    <h1 className="text-5xl font-bold">{car?.name}</h1>
                    <p className="py-6">{car?.description}</p>
                    <div className='grid grid-cols-2 gap-x-10 gap-y-2'>
                        <p className=' font-semibold'>Brand: <span className='uppercase'>{car?.brand_name}</span></p>
                        <p className=' font-semibold '>Type: {car?.type}</p>
                        <p className=' font-semibold '>Price: ${car?.price}</p>
                        <p className=' font-semibold flex items-center justify-start'>Rating: {car?.rating} <span className='text-yellow-400 pb-1 ms-1'><BsStarFill></BsStarFill></span></p>
                    </div>
                    <button onClick={addToCart} className="active:scale-95 my-8 relative inline-flex items-center justify-center p-4 px-6 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#FF4D24] rounded-md shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FF4D24] group-hover:translate-x-0 ease">
                            <img className="w-6 h-6" src="https://i.ibb.co/r584Mpr/add-xxl.png" alt="" />

                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease uppercase">Add to cart</span>
                        <span className="relative invisible uppercase">Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
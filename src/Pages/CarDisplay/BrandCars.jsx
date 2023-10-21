import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import Loading from '../../Shared/Loading'

const BrandCars = () => {
    const [loading, setLoading] =useState(true)
    const [cars, setCars] = useState([]);
    let { brand } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/display/${brand}`)
            .then(res => res.json())
            .then(data => {
                setCars(data)
                setLoading(false)
            })
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='my-20 md:my-28 max-w-6xl mx-auto px-3 mx:px-8 lg:px-0 text-roboto
        ' >
            <h2 className='uppercase text-center text-3xl md:text-5xl font-semibold mb-6 md:mb-10 underline underline-offset-8'><span className='uppercase'>{brand} </span>Cars</h2>
            {
                cars.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                    {
                        cars?.map(car => <CarCard car={car} key={car._id}></CarCard>)
                    }
                </div>
                
                :<div>
                        <h1 className='font-bold text-center text-4xl mt-12'>Sorry! No cars available</h1>
                </div>
            }

        </div>
    );
};

export default BrandCars;


const CarCard = ({ car }) => {
    const { brand_name, img, name, type, price, description, rating } = car;
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <figure><img className='h-52 w-full duration-300 hover:scale-110' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-3xl">{name}</h2>
                <p className='text-sm'>{description}</p>
                <div className='grid grid-cols-2 gap-x-10 gap-y-2'>
                    <p className=' font-semibold'>Brand: <span className='uppercase'>{brand_name}</span></p>
                    <p className=' font-semibold '>Type: {type}</p>
                    <p className=' font-semibold '>Price: ${price}</p>
                    <p className=' font-semibold flex items-center justify-start'>Rating: {rating} <span className='text-yellow-400 pb-1 ms-1'><BsStarFill></BsStarFill></span></p>
                </div>

                <div className="card-actions justify-between mt-4">
                    <Link to={`/cardetails/${car._id}`} className="relative inline-flex items-center justify-center p-4 px-6 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#FF4D24] rounded-md shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FF4D24] group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease uppercase">Details</span>
                        <span className="relative invisible uppercase">Details</span>
                    </Link>
                    <Link to={`/updatecar/${car._id}`} className="relative inline-flex items-center justify-center p-4 px-6 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#FF4D24] rounded-md shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FF4D24] group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease uppercase">Update</span>
                        <span className="relative invisible uppercase">Update</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../../Context/Context';
import { BsStarFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyCart = () => {
    const { user } = useContext(ContextAuth)
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/cart/${user.email}`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0'>
            <h2 className='uppercase text-center text-3xl md:text-5xl font-semibold mb-6 md:mb-10 underline underline-offset-8 mt-8 md:mt-12 lg:20'>My carts</h2>

            {
                carts.length > 0 ? <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                    {
                        carts?.map(cart => <CartCard cart={cart} key={cart._id}></CartCard>)
                    }
                </div>

                    : <div>
                        <h1 className='font-bold text-center text-4xl mt-12'>No carts available!</h1>
                    </div>
            }
        </div>
    );
};

export default MyCart;


const CartCard = ({ cart }) => {
    const { name, brand_name, type, description, price, img, rating, cart_id, _id } = cart;

    const deleteButton = ()=>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/cart/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        console.log('delete');

                        // const remaining = carts.filter(coffee => coffee._id !== id)
                        // setCoffees(remaining)
                        // console.log(remaining);
                    })

            }
        })
    }

    return (
        <div className="card md:card-side bg-base-100 card-shadow hover:scale-105 duration-300">
            <figure className=' md:w-2/5'><img className='w-full h-full' src={img} alt="Movie" /></figure>
            <div className="py-10 px-8 flex justify-between md:w-2/3">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p className=' flex items-center justify-start'>Rating: {rating} <span className='text-yellow-400 pb-1 ms-1'><BsStarFill></BsStarFill></span></p>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/cardetails/${cart_id}`} className="relative inline-flex items-center justify-center p-4 px-6 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#FF4D24] rounded-md shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FF4D24] group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease uppercase">Details</span>
                        <span className="relative invisible uppercase">Details</span>
                    </Link>
                    <button onClick={deleteButton}  className="relative inline-flex items-center justify-center p-4 px-6 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#FF4D24] rounded-md shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FF4D24] group-hover:translate-x-0 ease">
                            <AiOutlineDelete className='font-bold text-2xl'></AiOutlineDelete>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease uppercase">Delete</span>
                        <span className="relative invisible uppercase"> De lete </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
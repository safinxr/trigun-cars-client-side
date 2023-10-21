import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCar = () => {

    const [oldData, setOldData] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://trigun-cars-server-side-2rslvmt9m-safin-khans-projects.vercel.app/cardata/${id}`)
            .then(res => res.json())
            .then(data => setOldData(data))
    }, [])


    const handelUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand_name = e.target.brandName.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const img = e.target.img.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const carData = { name, brand_name, type, description, price, img, rating };
        console.log(carData);


        fetch(`https://trigun-cars-server-side-2rslvmt9m-safin-khans-projects.vercel.app/cardata/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Car added successful',
                        showConfirmButton: false,
                        timer: 1500
                    })


                };
            })


    }

    // return html 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
    return (
        <div className='bg-[url("https://images.unsplash.com/photo-1612966808160-87a819e0af82?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black bg-opacity-50'>
            <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-o text-roboto py-12 md:py-20 lg:py-24'>
                <div className='lg:w-3/4 mx-auto form-shadow p-6 md:p-8 lg:p-16 rounded-2xl bg-secondary'>
                    <h1 className='text-center text-white font-bold text-3xl mb-12'>Update Car Details</h1>
                    <form onSubmit={handelUpdate}
                        className='grid grid-cols-1 md:grid-cols-2 gap-8' >
                        {/* Name */}
                        <div>
                            <label className="label">
                                <span className="label-text text-white">Car Name</span>
                            </label>
                            <input defaultValue={oldData?.name} required className="w-full input input-bordered  h-10 focus:border-0" type="text" name='name' placeholder='Name' />
                        </div>
                        {/* brandName */}
                        <div>
                            <label className="label">
                                <span className="label-text text-white">Brand Name</span>
                            </label>
                            <select required className="w-full input input-bordered  h-10 focus:border-0" name="brandName" >
                                <option value={oldData?.brand_name}>{oldData?.brand_name}</option>
                                <option value="toyota">Toyota</option>
                                <option value="honda">Honda</option>
                                <option value="ford">Ford</option>
                                <option value="tesla">Tesla</option>
                                <option value="bmw">BMW</option>
                                <option value="mercedes-benz">Mercedes-Benz</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        {/* type */}
                        <div>
                            <label className="label">
                                <span className="label-text text-white">Type</span>
                            </label>
                            <input defaultValue={oldData?.type} required className="w-full input input-bordered  h-10 focus:border-0" type="text" name='type' placeholder='Type' />
                        </div>
                        {/* price  */}
                        <div>
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <input defaultValue={oldData?.price} required className="w-full input input-bordered  h-10 focus:border-0" type="number" name='price' placeholder='Price' />
                        </div>
                        {/* img  */}
                        <div>
                            <label className="label">
                                <span className="label-text text-white">Image url</span>
                            </label>
                            <input defaultValue={oldData?.img} required className="w-full input input-bordered  h-10 focus:border-0" type="text" name='img' placeholder='Image URL' />
                        </div>
                        {/* rating */}
                        <div>
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <select required
                                className="w-full input input-bordered  h-10 focus:border-0" name="rating"

                            >
                                <option value={oldData?.rating}>{oldData?.rating} star</option>
                                <option value="1">1 Star</option>
                                <option value="2">2 Star</option>
                                <option value="3">3 Star</option>
                                <option value="4">4 Star</option>
                                <option value="5">5 Star</option>

                            </select>
                        </div>

                        {/* description  */}
                        <div className='md:col-span-2'>
                            <label className="label">
                                <span className="label-text text-white">Description</span>
                            </label>
                            <textarea defaultValue={oldData?.description} required className=" w-full input input-bordered  h-44 focus:border-0" name="description" placeholder='Write short description' cols="30" rows="10"></textarea>
                        </div>
                        <button type='submit' className="rounded-md px-10 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-white  mx-auto md:col-span-2">

                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-300 group-hover:text-black ease">Submit
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCar;
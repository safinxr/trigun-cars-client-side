import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const AddProduct = () => {
    return (
        <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-o text-roboto'>
            <div className='lg:w-3/4 mx-auto my-12 md:my-20 lg:md-24 form-shadow p-6 md:p-8 lg:p-16 rounded-2xl'>
                <h1 className='text-center font-bold text-2xl mb-12'>Add Your Car</h1>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-8' >
                    <input required className="w-full input input-bordered input-error h-10 focus:border-0" type="text" name='name' placeholder='Name' />

                    <select required className="w-full input input-bordered input-error h-10 focus:border-0" name="brandName" >
                        <option value="" disabled selected>Select Brand Name</option>
                        <option value="toyota">Toyota</option>
                        <option value="honda">Honda</option>
                        <option value="ford">Ford</option>
                        <option value="tesla">Tesla</option>
                        <option value="bmw">BMW</option>
                        <option value="mercedes-benz">Mercedes-Benz</option>
                        <option value="audi">Audi</option>
                    </select>

                    <input required className="w-full input input-bordered input-error h-10 focus:border-0" type="text" name='type' placeholder='Type' />

                    <input required className="w-full input input-bordered input-error h-10 focus:border-0" type="number" name='price' placeholder='Price' />

                    <input required className="w-full input input-bordered input-error h-10 focus:border-0" type="text" name='img' placeholder='Image URL' />

                    <select required className="w-full input input-bordered input-error h-10 focus:border-0" name="rating" >
                        <option value="" disabled selected>Select Rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                        <option value="5">5 Star</option>
                        
                    </select>


                    <textarea required className="md:col-span-2 w-full input input-bordered input-error h-44 focus:border-0" name="description" placeholder='Write short description' cols="30" rows="10"></textarea>
                    <button  className="rounded-md px-10 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D24]  mx-auto md:col-span-2">

                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D24] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-[#FF4D24] transition duration-300 group-hover:text-white ease">Submit
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
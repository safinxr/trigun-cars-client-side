import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {

    const notify = (x) => toast.success(x, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const addHandel = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand_name = e.target.brandName.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const img = e.target.img.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const carData = { name, brand_name, type, description, price, img, rating };


        fetch('http://localhost:3000/cardata', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    notify("Congratulations! Car has been added successfully")
                    e.target.reset()
                };
            })


    }



    return (
        <div className='bg-[url("https://images.unsplash.com/photo-1586375103528-8bc247aa8110?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black bg-opacity-50'>
            <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-o text-roboto py-12 md:py-20 lg:py-24'>
                <div className='lg:w-3/4 mx-auto form-shadow p-6 md:p-8 lg:p-16 rounded-2xl bg-white'>
                    <h1 className='text-center font-bold text-2xl mb-12'>Add Your Car</h1>
                    <form onSubmit={addHandel}
                        className='grid grid-cols-1 md:grid-cols-2 gap-8' >
                        {/* Name */}
                        <input required className="w-full input input-bordered input-error h-10 focus:border-0" type="text" name='name' placeholder='Name' />
                        {/* brandName */}
                        <select required className="w-full input input-bordered input-error h-10 focus:border-0" name="brandName" >
                            <option value="toyota">Toyota</option>
                            <option value="honda">Honda</option>
                            <option value="ford">Ford</option>
                            <option value="tesla">Tesla</option>
                            <option value="bmw">BMW</option>
                            <option value="mercedes-benz">Mercedes-Benz</option>
                            <option value="audi">Audi</option>
                        </select>
                        {/* type */}
                        <input required className="w-full input input-bordered input-error h-10 focus:border-0" type="text" name='type' placeholder='Type' />
                        {/* price  */}
                        <input required className="w-full input input-bordered input-error h-10 focus:border-0" type="number" name='price' placeholder='Price' />
                        {/* img  */}
                        <input required className="w-full input input-bordered input-error h-10 focus:border-0" type="text" name='img' placeholder='Image URL' />
                        {/* rating */}
                        <select required
                            className="w-full input input-bordered input-error h-10 focus:border-0" name="rating"

                        >
                            <option value="1">1 Star</option>
                            <option value="2">2 Star</option>
                            <option value="3">3 Star</option>
                            <option value="4">4 Star</option>
                            <option value="5">5 Star</option>

                        </select>

                        {/* description  */}
                        <textarea required className="md:col-span-2 w-full input input-bordered input-error h-44 focus:border-0" name="description" placeholder='Write short description' cols="30" rows="10"></textarea>
                        <button type='submit' className="rounded-md px-10 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D24]  mx-auto md:col-span-2">

                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D24] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-[#FF4D24] transition duration-300 group-hover:text-white ease">Submit
                            </span>
                        </button>
                    </form>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
};

export default AddProduct;
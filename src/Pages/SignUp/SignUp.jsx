import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/FY88TK0/si-bg-min.jpg')] 
        bg-cover bg-center bg-no-repeat">
            <div className='max-w-4xl mx-auto flex justify-end items-center h-[90vh] '>
                <div className='w-2/5 p-10  bg-white shadow-xl rounded-xl '>
                    <h3 className='font-bold text-center text-2xl mb-8'>SignUp</h3>
                    <form className=''>
                        <input
                            className='w-full input input-bordered input-error mb-8 h-10 focus:border-0 '
                            type="name"
                            name="name"
                            placeholder='Name'
                            required />

                        <input
                            className='w-full input input-bordered input-error mb-8 h-10 focus:border-0 '
                            type="email"
                            name="email"
                            placeholder='Email'
                            required />

                        <input
                            className='w-full input input-bordered input-error mb-8 h-10 focus:border-0 '
                            type="password"
                            name="password"
                            placeholder='Password'
                            required />

                        <input className='w-full bg-[#FF4D24] py-2 rounded-lg text-white uppercase font-semibold active:scale-95' type="submit" />
                    </form>
                    <p className='mt-4 text-start'>Already have an account? <Link className='text-primary' to='/Signin'>Sign in</Link>
                    </p>
                    <div className='my-4 flex justify-center items-center'>
                        <div className='border w-full me-2'></div>
                        <p className='text-[#E5E7EB] border px-1.5 rounded-md'>OR</p>
                        <div className='border w-full ms-2'></div>
                    </div>
                    <div className='flex gap-5 justify-center'>
                        <img className='w-8' src="https://i.ibb.co/t23XdpQ/facebook.png" alt="" />
                        <img className='w-8' src="https://i.ibb.co/5G8GtRK/googel.png" alt="" />
                        <img className='w-8' src="https://i.ibb.co/4M53vW3/github.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
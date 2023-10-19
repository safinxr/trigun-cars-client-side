import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../Context/Context';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const SignIn = () => {
    const gProvider = new GithubAuthProvider();
    const provider = new GoogleAuthProvider();
    const [errorText, setErrorText] = useState(null)
    const { emailPassSignIn, googleSignIn } = useContext(ContextAuth)
    const navigate = useNavigate()


    const formSubmit = e => {
        setErrorText(null)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        emailPassSignIn(email, password)
            .then(res => {
                navigate('/')                
            })
            .catch(error => {
                console.log(error.message, 'sfa');
                if (error.message.split("/")[1].split(")")[0] === 'invalid-login-credentials') {
  
                    setErrorText('Invalid email or password. Please try again');
                } else {
                    setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
                }
                
            })


    }

    const googleHandel = (xProvider) => {
        googleSignIn(xProvider)
            .then(() => {
                navigate('/')
            }).catch((error) => {
                console.log(error.message);
            });

    }



    // RETURN HTML 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
    return (

        <div className="bg-[url('https://i.ibb.co/D57ZzBt/su-bg-min.jpg')] 
        bg-cover bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-20 text-roboto">
            <div className='max-w-4xl mx-auto flex justify-center lg:justify-end items-center h-[90vh] px-3 md:px-8 lg:px-0'>
                <div className='md:w-3/5 lg:w-2/5 p-10  bg-white shadow-xl rounded-xl '>
                    <h3 className='font-bold text-center text-2xl mb-8'>SignIn</h3>
                    <form onSubmit={formSubmit}>
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

                        {
                            errorText && <>
                                <p className='mb-2 mt-[-4px] ms-2 text-red-500 text-sm'>{errorText}</p>
                            </>
                        }
                        <button type="submit" className='w-full bg-[#FF4D24] py-2 rounded-lg text-white uppercase font-semibold active:scale-95'>
                            SIGN IN
                        </button>
                    </form>

                    {/* FORM END    ⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔                 */}

                    <p className='mt-4 ms-2 text-start'>Don't have an account? <Link className='text-primary' to='/Signup'>Sign up</Link>
                    </p>

                    <div className='my-4 flex justify-center items-center'>
                        <div className='border w-full me-2'></div>
                        <p className='text-[#E5E7EB] border px-1.5 rounded-md'>OR</p>
                        <div className='border w-full ms-2'></div>
                    </div>
                    <div className='flex gap-5 justify-center'>
                        <img onClick={() => googleHandel(provider)} className='w-8 active:scale-95 cursor-pointer' src="https://i.ibb.co/5G8GtRK/googel.png" alt="" />

                        <img onClick={() => googleHandel(gProvider)} className='w-8 active:scale-95 cursor-pointer' src="https://i.ibb.co/4M53vW3/github.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../Context/Context';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import Loading from '../../Shared/Loading';





const SignUp = () => {
    const gProvider = new GithubAuthProvider();
    const provider = new GoogleAuthProvider();
    const [errorText, setErrorText] = useState(null)
    const { emailPassSignUp, upProfile, googleSignIn } = useContext(ContextAuth)
    const navigate = useNavigate()


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

    const formSubmit = e => {
        setErrorText(null)
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password.length < 6) {
            return setErrorText('password is less than 6 characters')
        }
        if (!/[A-Z]/.test(password)) {
            return setErrorText("password don't have a capital letter")
        }

        if (!/[^A-Za-z0-9]/.test(password)) {
            return setErrorText("password don't have a special character")
        }
        emailPassSignUp(email, password)
            .then(res => {
                upProfile(name)
                    .then(() => {
                        notify("Congratulations! Your account has been successfully created")

                        setTimeout(function () {
                            navigate('/')
                        }, 1500);
                    }).catch((error) => {
                        console.log(error.message);
                        setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
                    });




            })
            .catch(error => {
                console.log(error.message);
                setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
            })


    }

    const googleHandel = (xProvider) => {
        googleSignIn(xProvider)
            .then(() => {
                notify("Congratulations! Your account has been successfully created")

                setTimeout(function () {
                    navigate('/')
                }, 1000);
            }).catch((error) => {
                console.log(error.message);
            });

    }



    // RETURN HTML 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
    return (

        <div className="bg-[url('https://i.ibb.co/FY88TK0/si-bg-min.jpg')] 
        bg-cover bg-center bg-no-repeat text-roboto">
            <div className='max-w-4xl mx-auto flex justify-center lg:justify-end items-center h-[90vh] px-3 md:px-8 lg:px-0'>
                <div className='md:w-3/5 lg:w-2/5 p-10  bg-white shadow-xl rounded-xl '>
                    <h3 className='font-bold text-center text-2xl mb-8'>SignUp</h3>
                    <form onSubmit={formSubmit}>
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

                        {
                            errorText && <>
                                <p className='mb-2 mt-[-4px] ms-2 text-red-500 text-sm'>{errorText}</p>
                            </>
                        }

                        <button type="submit" className='w-full bg-[#FF4D24] py-2 rounded-lg text-white uppercase font-semibold active:scale-95'>
                            SIGN UP
                        </button>
                    </form>

                    {/* FORM END    ⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔                 */}

                    <p className='mt-4 ms-2 text-start'>Already have an account? <Link className='text-primary' to='/Signin'>Sign in</Link>
                    </p>

                    <div className='my-4 flex justify-center items-center'>
                        <div className='border w-full me-2'></div>
                        <p className='text-[#E5E7EB] border px-1.5 rounded-md'>OR</p>
                        <div className='border w-full ms-2'></div>
                    </div>
                    <div className='flex gap-5 justify-center'>
                        <img onClick={()=>googleHandel(provider)} className='w-8 active:scale-95 cursor-pointer' src="https://i.ibb.co/5G8GtRK/googel.png" alt="" />

                        <img onClick={() => googleHandel(gProvider)} className='w-8 active:scale-95 cursor-pointer' src="https://i.ibb.co/4M53vW3/github.png" alt="" />
                    </div>
                </div>
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
    );
};

export default SignUp;
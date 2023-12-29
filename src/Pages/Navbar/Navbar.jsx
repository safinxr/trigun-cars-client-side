import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ContextAuth } from '../../Context/Context';

const Navbar = () => {
    const { user, logOut } = useContext(ContextAuth)
    const [navBg, setNavBg] = useState(false)
    let { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {
            setNavBg(false)

        }
        else {
            setNavBg(true)
        }
    }, [pathname])

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            setNavBg(true)
        }
        else {
            if (pathname === '/') {
                return setNavBg(false)
            }
            setNavBg(true)
        }
    })

    const signOut = () => {
        console.log("yo logout");
        logOut()
        // .then( ()=>{
        //     console.log(" done");
        // })
        // .catch()
    }


    // NAVLINK 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗
    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-2  lg:underline underline-offset-8" : "px-2"
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/addproduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-2 lg:underline underline-offset-8" : "px-2"
            }
        >
            Add Product
        </NavLink></li>
        <li><NavLink
            to="/mycart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-2 lg:underline underline-offset-8" : "px-2"
            }
        >
            My Cart
        </NavLink></li>
    </>

    const inOut = <>
        {
            user ?
                <div className='flex flex-col lg:flex-row lg:items-center '>
                    <li><button 
                        onClick={signOut}
                        className="px-2"
                    >
                        Sign out
                    </button></li>

                    <div className='flex items-center justify-between bg-[#FF4D24] mr-2 ps-2 py-0 rounded-3xl '>
                        <div className='ms-2 text-base font-medium text-white'>{user.displayName}</div>
                        {
                            user.photoURL ? <img className='ms-2 w-9 rounded-full' src={user.photoURL} alt="" /> :
                                <div className='w-9 h-9 rounded-full bg-[#525D7C] flex justify-center items-center'>
                                    <p className='text-white text-xl'>{user.email.slice(0, 1)}</p>
                                </div>
                        }
                    </div>

                </div>

                : <>
                    <li><NavLink
                        to="/signin"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "px-2 lg:underline underline-offset-8" : "px-2"
                        }
                    >
                        Sign in
                    </NavLink></li>
                    <li><NavLink
                        to="/signup"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "px-2 lg:underline underline-offset-8" : "px-2"
                        }
                    >
                        Sign up
                    </NavLink></li>
                </>

        }


    </>

    // RETURN HTML START 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
    return (
        <nav className={navBg ? "sticky top-0 z-10 bg-black" : "sticky top-0 z-10"}>
            <div className="navbar max-w-xl mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                            {inOut}

                        </ul>
                    </div>
                    <Link className="flex items-center normal-case text-3xl"><img className='w-10 mr-2 ' src="https://i.ibb.co/mySC0G3/trigun-logo.png" alt="" /> <span className='text-white font-semibold'>TRIGUN</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" text-white font-semibold flex items-center">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {user ?

                        <div className='flex flex-col lg:flex-row lg:items-center '>

                            <div className='flex items-center justify-between bg-[#FF4D24] mr-2 ps-2 py-0 rounded-3xl '>
                                <div className='ms-2 text-base font-medium text-white'>{user.displayName}</div>
                                {
                                    user.photoURL ? <img className='ms-2 mr-[-2px] w-9 rounded-full' src={user.photoURL} alt="" /> :
                                        <div className='ms-2 mr-[-2px] w-9 h-9 rounded-full bg-[#525D7C] flex justify-center items-center'>
                                            <p className='text-white text-xl'>{user.email.slice(0, 1)}</p>
                                        </div>
                                }
                            </div>
                            <button onClick={signOut}
                            className="rounded-md  px-4 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D24] ">

                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D24] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-[#FF4D24] transition duration-300 group-hover:text-white ease">Sign out
                                </span>
                            </button>

                        </div>


                        : <><Link to='/signin' className="rounded-md px-4 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D24] ">

                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D24] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-[#FF4D24] transition duration-300 group-hover:text-white ease">Sign in
                            </span>
                        </Link>
                            <Link to='/signup' className="rounded-md px-4 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D24] ">

                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D24] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-[#FF4D24] transition duration-300 group-hover:text-white ease">Sign up
                                </span>
                            </Link></>}


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
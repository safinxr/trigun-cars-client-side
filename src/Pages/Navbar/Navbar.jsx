import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
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

    // RETURN HTML START 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
    return (
        <nav className={navBg ? "sticky top-0 z-10 bg-black" :"sticky top-0 z-10"}>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                            {inOut}

                        </ul>
                    </div>
                    <Link className="flex items-center normal-case text-3xl"><img className='w-12 mr-2 ' src="https://i.ibb.co/YbFDYtY/logo.png" alt="" /> <span className='text-white font-semibold'>TRIGUN</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" text-white font-semibold flex items-center">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">

                    <Link to='/signin' className="rounded-md px-4 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D24] ">

                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D24] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-[#FF4D24] transition duration-300 group-hover:text-white ease">Sign in
                        </span>
                    </Link>
                    <Link to='/signup' className="rounded-md px-4 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D24] ">

                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D24] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-[#FF4D24] transition duration-300 group-hover:text-white ease">Sign up
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
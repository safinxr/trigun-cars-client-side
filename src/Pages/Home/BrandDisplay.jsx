import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BrandDisplay = () => {
    useEffect(()=>{
        AOS.init();
    },[])

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className='my-20 md:my-32 max-w-6xl mx-auto px-3 mx:px-8 lg:px-0' >
            <h2 className='uppercase text-center text-3xl md:text-5xl font-semibold mb-6 md:mb-10'>Car Brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                {
                    brands.map(brand => <BrandCard brand={brand} key={brand.id}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default BrandDisplay;


const BrandCard = ({ brand }) => {
    const { brand_name, brand_img, car_img } = brand;
    return (
        <div data-aos="fade-up">
            <div className="card bg-base-100 card-shadow duration-300  active:scale-95 relative group ">
                <figure>
                    <img src={brand_img} alt="brand" />
                    <img className='hidden lg:flex absolute opacity-0 group-hover:opacity-100 rounded-t-2xl duration-500 ' src={car_img} alt="car" />
                </figure>
                <div className="card-body bg-[#FF4D24] rounded-b-2xl p-2">
                    <h2 className="text-white text-center font-bold">{brand_name}</h2>
                </div>
            </div>
        </div>
    )
}
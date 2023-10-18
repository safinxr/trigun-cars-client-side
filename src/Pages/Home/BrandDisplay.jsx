import React, { useEffect, useState } from 'react';

const BrandDisplay = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    console.log(brands);
    return (
        <div className='my-32 max-w-6xl mx-auto' >
            <h2 className='uppercase text-center text-5xl font-semibold mb-16'>Car Brands</h2>
            <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-8 '>
                {
                    brands.map(brand => <BrandCard brand={brand} key={brand.id}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default BrandDisplay;


const BrandCard = ({ brand }) => {
    const {brand_name, brand_img, car_img} = brand;
    return (
        <div>
            <div className="card bg-base-100 card-shadow duration-300  active:scale-95">
                <figure><img src={brand_img} alt="Shoes" /></figure>
                <div className="card-body bg-black rounded-b-2xl p-2">
                    <h2 className="text-white text-center font-bold">{brand_name}</h2>
                </div>
            </div>
        </div>
    )
}
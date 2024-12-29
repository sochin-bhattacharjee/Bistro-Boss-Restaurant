import React from 'react';

const MenuItem = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex gap-3'>
            <img className='w-[100px] h-[100px] rounded-r-full rounded-bl-full object-cover' src={image} alt="" />
            <div>
                <h3 className='uppercase text-start font-semibold'>{name}----------</h3>
                <p className='text-start text-slate-500 p-2'>{recipe}</p>
            </div>
            <p className='font-bold text-yellow-600'>Price: ${price}</p>
        </div>
    );
};

export default MenuItem;
import React from 'react';
import MenuItem from '../../shared/MenuItem/MenuItem';
import Cover from '../../shared/Cover/Cover';

const MenuCategory = ({items , tittle , img}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;
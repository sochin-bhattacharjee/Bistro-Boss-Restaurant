import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../shared/Cover/Cover';
const Menu = () => {
    const menuImg = 'https://media.istockphoto.com/id/466771930/photo/table-setting.jpg?s=612x612&w=0&k=20&c=0jAnmMHcNJR7eNw5wSvnmXJdLwINcWE6icsC8t4KgBM=';
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} tittle="Our Menu"></Cover>
        </div>
    );
};
export default Menu;
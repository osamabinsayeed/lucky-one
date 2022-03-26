import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>Name: {name} </h2>
        </div>
    );
};

export default Product;
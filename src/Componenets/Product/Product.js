import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
                <h3>Name: {name} </h3>
                <p>Price: ${price}</p>
            </div>
            <button className='cart-btn' onClick={
                () => props.handleClick(props.product)}>Add To Cart</button>
        </div >


    );
};

export default Product;
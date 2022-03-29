import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
                () => props.handleClick(props.product)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div >


    );
};

export default Product;
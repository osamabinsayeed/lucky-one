import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleClick = (product) => {
        console.log(product);
    }
    return (
        <div className='shop-container'>
            <div className="bag-container">
                {
                    product.map(product => <Product
                        key={product.id}
                        handleClick={handleClick}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="bag-choice">
                <h1>bag choice</h1>
            </div>
        </div>
    );
};

export default Shop; <h1>this is shop</h1>
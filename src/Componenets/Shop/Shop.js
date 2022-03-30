import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import RandomBag from '../RandomBag/RandomBag';
import './Choices/Choice'
import Choice from './Choices/Choice';
import './Shop.css'
const Shop = () => {
    const [product, setProducts] = useState([]);
    let [bagChoice, setBagChoice] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleClick = (product) => {
        // console.log(product);
        const newChoice = [...bagChoice, product];
        setBagChoice(newChoice);
    }
    const handleChooseAgain = (bagChoice) => {
        setBagChoice([]);
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
                <Choice bagChoice={bagChoice}></Choice>
                <RandomBag
                    bagChoice={bagChoice}
                    handleChooseAgain={handleChooseAgain}

                ></RandomBag>


            </div>

        </div>
    );
};

export default Shop; <h1>this is shop</h1>
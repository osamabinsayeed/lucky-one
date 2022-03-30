import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


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

        const newChoice = [...bagChoice, product];
        setBagChoice(newChoice);
    }
    const handleChooseAgain = (setBagChoice) => {
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
                <Choice
                    bagChoice={bagChoice}

                // handleChooseAgain={handleChooseAgain}
                ></Choice>

                {/* <RandomBag
                    bagChoice={bagChoice}
                // handleChooseAgain={handleChooseAgain}

                ></RandomBag> */}



            </div>
            <div className='answers'>
                <div>
                    <h2>how react works</h2>
                    <p>
                        React is a javascript library. It uses virtual DOM. Which is basically a DOM tree representation on js.It uses it's virtual representation to efitiently update the browsers DOM.  React Updates the DOM to match the react elements.
                    </p>
                </div>
                <div>
                    <h2>
                        Difference between props and state
                    </h2>
                    <p>
                        We can use props to pass data to one component to another. On the other hand, state works only in local data. it is a local storage that passes data to only local components, not other components.
                    </p>
                </div>

            </div>
        </div>
    );
};


export default Shop;

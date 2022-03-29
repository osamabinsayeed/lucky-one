import React from 'react';

const RandomBag = (props) => {

    // console.log(props.bagName);
    let randomBag = props.bagName;
    let bagToChoose = '';
    // console.log(randomBag);
    let maxNumber = props.bagName.length;
    let randomNumber = Math.floor((Math.random() * maxNumber));
    if (randomNumber == randomBag.indexOf(randomBag[randomNumber])) {
        bagToChoose = randomBag[randomNumber];

    }
    console.log(bagToChoose);



    return (
        <div>
            <button className='random-btn' onClick={() => props.handleRandom(props)}>
                <p>Choose one for me</p>
                <h2>
                    {bagToChoose}
                </h2>
            </button>
        </div>
    );
};

export default RandomBag;
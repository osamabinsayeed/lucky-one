import React from 'react';
import './RandomBag.css'
const RandomBag = (props) => {



    let randomBag = props.bagName;
    // console.log(props.bagChoice);




    // let randomBag = props.bagName;
    // let bagToChoose = '';
    // let maxNumber = randomBag.length;
    // let randomNumber = Math.floor((Math.random() * maxNumber));
    // if (randomNumber == randomBag.indexOf(randomBag      [randomNumber])) {
    //     bagToChoose = randomBag[randomNumber];

    // }




    return (
        <div>

            <button className='random-btn' onClick={() => props.handleRandom(randomBag)}>
                <p>Choose one for me</p>

            </button>
            <div>
                <h2>
                    {props.bagchoice}
                </h2>
            </div>

            <div>
                <button onClick={() => props.handleChooseAgain(props.bagChoice)} className="remove-btn">
                    <p>
                        choose again
                    </p>
                </button>
            </div>

        </div>
    );
};

export default RandomBag;
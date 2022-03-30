import './Choice.css'
import RandomBag from '../../RandomBag/RandomBag';
import { useState } from 'react';
const Choice = ({ bagChoice }) => {

    let bagName = [];
    const [bagchoice, setBagchoice] = useState([]);

    for (let bag of bagChoice) {

        bagName = [...bagName, bag.name];
    }
    // let bagchoice = '';
    let handleRandom = (randomBag) => {
        let bagToChoose = '';
        let maxNumber = randomBag.length;
        let randomNumber = Math.floor((Math.random() * maxNumber));
        if (randomNumber == randomBag.indexOf(randomBag[randomNumber])) {
            bagToChoose = randomBag[randomNumber];

        }

        setBagchoice(bagToChoose);
    }

    return (
        <div className="bags">
            <h1>Your Choice</h1>
            <p>Total Choices:  {bagChoice.length}</p>
            <div>
                {
                    bagName.map(
                        (bag) => <h2 key={bag}>{bag}</h2>
                    )
                }
            </div>
            <div>

            </div>
            <div>
                <RandomBag
                    bagChoice={bagChoice}

                    handleRandom={handleRandom}
                    bagchoice={bagchoice}
                    bagName={bagName}
                ></RandomBag>
            </div>

        </div>
    );

};

export default Choice;
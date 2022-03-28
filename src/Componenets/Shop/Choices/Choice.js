import { useState } from "react";

const Choice = ({ bagChoice }) => {

    let bagName = [];


    for (let bag of bagChoice) {

        bagName = [...bagName, bag.name];
    }
    console.log(bagName);
    return (
        <div>
            <h1>Your Choice</h1>
            <p>Total Choices:  {bagChoice.length}</p>
            <div>
                {
                    bagName.map(
                        (bag) => <h2>{bag}</h2>
                    )
                }
            </div>
        </div>
    );

};

export default Choice;
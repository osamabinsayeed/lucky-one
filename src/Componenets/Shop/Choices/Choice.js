import './Choice.css'
import RandomBag from '../../RandomBag/RandomBag';
const Choice = ({ bagChoice }) => {
    let bagName = [];
    // const handleRandom = (bagChoice) => {
    //     for (let bag of bagChoice) {

    //         bagName = [...bagName, bag.name];
    //         console.log(bagName);
    //     }
    // }
    for (let bag of bagChoice) {

        bagName = [...bagName, bag.name];
    }


    // console.log(bagName.length);


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
                    // handleRandom={handleRandom}
                    bagName={bagName}
                ></RandomBag>
            </div>

        </div>
    );

};

export default Choice;
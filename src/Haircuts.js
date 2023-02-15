import { dataTwo } from "./dataTwo";
import { useState } from "react";
import { dataFive } from "./dataFive";
import './App.css';


function Haircuts() {
    const [haircut, setHaircut] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const {id, name, image} = dataTwo[haircut];

    const nextHaircut = () => {
        setHaircut((haircut => {
            haircut ++;
            if(haircut > dataTwo.length -1) {
                haircut = 0;
            }
            return haircut;
        }))
    }

    const previousHaircut = () => { 
        setHaircut((haircut => {
            haircut --;
            if(haircut < 0) {
                return dataTwo.length - 1;
            }
            return haircut;
        }))
    }

    return(
    <div>
        <div className="back">
            <h1>Наши работы</h1>
        </div>
        <div className="container">
            {dataFive.map((item => {
                const{id, description} = item;

                return (
                    <div key={id}>
                        <p className="desc">{showMore? description: description.substring(0, 190) + "..."}
                        <button onClick={() => setShowMore(!showMore)}>{showMore? "Свернуть": "Развернуть"}</button>
                        </p>
                    </div>
                )
            }))}
        </div>
            <div key={id} className="back">
              <button className="change" onClick={previousHaircut}>
              <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
              </button>

            <img className="image" src={image} width="320px" alt="haircut"/>
            
              <button className="change" onClick={nextHaircut}>
              <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>
              </button>
            <h2>{name}</h2>
        </div>
    </div>   
    )
}
export default Haircuts;
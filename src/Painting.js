import { dataFour } from "./dataFour";
import { useState } from "react";
import { dataSix } from "./dataSix";
import './App.css';

function Painting() {
    const [painting, setPainting] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const {id, name, image} = dataFour[painting];

    const nextPainting = () => {
        setPainting((painting => {
            painting ++;
            if(painting > dataFour.length -1) {
                painting = 0;
            }
            return painting;
        }))
    }

    const previousPainting = () => {
        setPainting((painting => {
            painting --;
            if(painting < 0) {
                return dataFour.length - 1;
            }
            return painting;
        }))
    }

    return(
    <div>
        <div className="back">
            <h1>Наши работы по покраске волос</h1>
        </div>

        <div className="container">
            {dataSix.map((item => {
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
            <button className="change" onClick={previousPainting}>
                <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
            </button>

              <img className="image" src={image} width="320px" alt="painting"/>
                
            <button className="change" onClick={nextPainting}>
            <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>
            </button>
            <h2>{name}</h2>
            </div>
    </div>
        
    )
}

export default Painting;
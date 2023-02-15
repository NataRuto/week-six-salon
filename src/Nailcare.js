import { dataNine } from "./dataNine";
import { useState } from "react";
import { dataEight } from "./dataEight";

function Nailcare() {
    const [nailcare, setNailcare] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const {id, name, image} = dataNine[nailcare];

    const nextNailcare = () => {
        setNailcare((nailcare => {
            nailcare ++;
            if(nailcare > dataNine.length -1) {
                nailcare = 0;
            }
            return nailcare;
        }))
    }

    const previousNailcare = () => {
        setNailcare((nailcare => {
            nailcare --;
            if(nailcare < 0) {
                return dataNine.length - 1;
            }
            return nailcare;
        }))
    }

    return(
    <div>
        <div className="back">
            <h1>Работы наших мастеров</h1>
        </div>

        <div className="container">
            {dataEight.map((item => {
                const{id, description} = item;

                return(
                    <div key={id}>
                        <p className="desc">{showMore? description: description.substring(0, 190) + "..."}
                        <button onClick={() => setShowMore(!showMore)}>{showMore? "Свернуть": "Развернуть"}</button>
                        </p>
                    </div>
                )
            }))}
        </div>
            <div key={id} className="back">
            <button className="change" onClick={previousNailcare}>
            <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
            </button>

              <img className="image" src={image} width="320px" alt="laying"/>
              <button className="change" onClick={nextNailcare}>
            <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>  
            </button>

              <h2>{name}</h2>
            </div>
    </div>
        
    )
}


export default Nailcare;
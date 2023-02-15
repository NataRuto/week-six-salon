import { dataThree } from "./dataThree";
import { useState } from "react";
import { dataSeven } from "./dataSeven";

function Laying() {
    const [laying, setLaying] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const {id, name, image} = dataThree[laying];

    const nextLaying = () => {
        setLaying((laying => {
            laying ++;
            if(laying > dataThree.length -1) {
                laying = 0;
            }
            return laying;
        }))
    }

    const previousLaying = () => {
        setLaying((laying => {
            laying --;
            if(laying < 0) {
                return dataThree.length - 1;
            }
            return laying;
        }))
    }

    return(
    <div>
        <div className="back">
            <h1>Наши укладки</h1>
        </div>

        <div className="container">
            {dataSeven.map((item => {
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
            <button className="change" onClick={previousLaying}>
            <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
            </button>

              <img className="image" src={image} width="320px" alt="laying"/>

            <button className="change" onClick={nextLaying}>
            <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>  
            </button>
              <h2>{name}</h2>
            </div>
    </div>
        
    )
}


export default Laying;
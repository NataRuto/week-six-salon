import { dataThree } from "./dataThree";
import { useState } from "react";
import './App.css';
import Sliders from "./Sliders";

function Laying() {
    const [laying, setLaying] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const {id, name, image} = dataThree[laying];

    const text = "Хорошая прическа состоит из нескольких взаимосвязанных компонентов: окрашивания, стрижки, укладки, каждый их которых требует определенного мастерства и опыта. Большинство женщин считает, и не без основания, что качественную укладку могут сделать только в салоне. Некоторые специалисты заявляют даже, что укладка – самый важный компонент, так как именно она определяет внешний вид прически. Поэтому стоит уделить укладке надлежащее внимание – приходите в салон. Наши мастера создадут для вас собственный уникальный образ, с учетом ваших пожеланий, типа и цвета ваших волос. Профессиональная укладка волос – это изменение структуры волоса с помощью специальных средств и инструментов. Кратковременная укладка волос (до следующего мытья волос) делается при помощи простейших парикмахерских инструментов и косметики. Долговременная укладка подразумевает использование специальных инструментов и косметических средств, которые позволят вам сохранить внешний вид вашей прически на протяжении недель и месяцев. Практически всегда долговременная укладка сопровождается процедурой завивки волос (другие ее названия – карвинг, «легкая химия»)."

    const next= () => {
        setLaying((laying => {
            laying ++;
            if(laying > dataThree.length -1) {
                laying = 0;
            }
            return laying;
        }))
    }

    const previous = () => {
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
            <div>
                <p className="desc">{showMore? text: text.substring(0, 190) + "..."}
                <button onClick={() => setShowMore(!showMore)}>{showMore? "Свернуть": "Развернуть"}</button>
                </p>
            </div> 
        </div> 
        
            {/* <div key={id} className="back">
            <button className="change" onClick={previousLaying}>
            <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
            </button> 
 */}
            <Sliders anySlider={dataThree}/>

              {/* <img className="image" src={image} width="320px" alt="laying"/> */}

            {/* <button className="change" onClick={nextLaying}>
            <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>  
            </button>
              <h2>{name}</h2>
            </div>    */}
            
    </div>
        
    )
}


export default Laying;
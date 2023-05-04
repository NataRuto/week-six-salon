import { dataNine } from "./dataNine";
import { useState } from "react";
import './App.css';
import Sliders from "./Sliders";

function Nailcare() {
    const [nailcare, setNailcare] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const {id, name, image} = dataNine[nailcare];

    const text = "Руки каждой женщины всегда на виду. Красивые и ухоженные руки всегда невольно притягивают взгляд окружающих. Именно маникюр может рассказать нам о вкусах, характере, настроении женщины. Само слово маникюр произошло от слов manus и cura, что в переводе с латыни означает руки и уход. Поэтому маникюр – это процедура ухода за руками. Во все времена женщины полировали и подпиливали свои ногти. В начале 20 века впервые появился лак для ногтей. Правда держался на ногтях он совсем не долго, но это положило начало маникюру с покрытием в современном понимании этого слова. У нас можно сделать все виды маникюра, также долговременное покрытие гель лаком и наращивание ногтей. У нас в команде только опытные мастера по маникюру, которые выполняют аппаратный, обрезной и комбинированный маникюр. Для вас большая палитра модных гель лаков Emi, Beautix, Luxio, Grape, дизайны ногтей любой сложности, французский маникюр. Стерильный инструмент в крафтпакете проходит все стадии обработки. Мы используем в работе одноразовые пилочки, бафы и все расходные материалы. Если вы еще думаете, где сделать маникюр в Минске недорого, не беспокоясь, сколько стоит маникюр, записывайтесь к нам в салон! Цены на маникюр вас приятно удивят."

    const next = () => {
        setNailcare((nailcare => {
            nailcare ++;
            if(nailcare > dataNine.length -1) {
                nailcare = 0;
            }
            return nailcare;
        }))
    }

    const previous = () => {
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
            <div>
                <p className="desc">{showMore? text: text.substring(0, 190) + "..."}
                <button onClick={() => setShowMore(!showMore)}>{showMore? "Свернуть": "Развернуть"}</button>
                </p>
            </div>
        </div> 
    
           {/* <div key={id} className="back">
            <button className="change" onClick={previousNailcare}>
            <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
            </button> */}
 
            <Sliders anySlider={dataNine}/>

              {/* <img className="image" src={image} width="320px" alt="laying"/> */}

            {/* <button className="change" onClick={nextNailcare}>
            <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>  
            </button>

              <h2>{name}</h2>
            </div>   */}       
    </div>
        
    )
}


export default Nailcare;
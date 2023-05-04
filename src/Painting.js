import { dataFour } from "./dataFour";
import { useState } from "react";
import './App.css';
import Sliders from "./Sliders";


function Painting() {
    const [painting, setPainting] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const {id, name, image} = dataFour[painting];

    const text = "Зачем красить волосы в салонах и тратить деньги на услуги мастера, когда в магазинах есть в наличии широчайший выбор красок для волос, которые можно применять самостоятельно – спросите вы? Наши клиенты уже знают ответ на этот вопрос. Для тех же, кто еще сомневается, мы предлагаем посетить наш салон, воспользоваться одной из наших услуг по низким ценам и самостоятельно составить мнение на этот счет. Разница между домашним и салонным окрашивание волос такая же, как между ремонтом своими силами и ремонтом, заказанным у профессионалов – вроде бы ничего так получилось самому все сделать, но постороннему сразу видно – делал непрофессионал. Если вы сравните вживую, своими глазами, домашнее и салонное окрашивание – разница будет очевидной. Стоит ли экономить на здоровье и красоте своих волос? Мастер-парикмахер, прежде чем приступить к окрашиванию, проведет диагностику типа волос клиента, их состояния, определит их впитывающую способность. Он может определить заранее, достижим ли вообще для конкретного типа волос желаемый оттенок цвета, и сколько процедур понадобится для этого. Опытные парикмахеры знают все тонкости гармонизации различных оттенков красителей (колористики) и могут получить значительно большее количество оттенков, чем предлагает вам стандартная краска для волос для домашнего использования."

    const next = () => {
        setPainting((painting => {
            painting ++;
            if(painting > dataFour.length -1) {
                painting = 0;
            }
            return painting;
        }))
    }

    const previous = () => {
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
            <div>
                <p className="desc">{showMore? text: text.substring(0, 190) + "..."}
                <button onClick={() => setShowMore(!showMore)}>{showMore? "Свернуть": "Развернуть"}</button>
                </p>
            </div>
        </div> 
        

         {/* <div key={id} className="back">
            <button className="change" onClick={previousPainting}>
                <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
            </button> */}
 
            <Sliders anySlider={dataFour}/>

              {/* <img className="image" src={image} width="320px" alt="painting"/> */}
                
            {/* <button className="change" onClick={nextPainting}>
            <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>
            </button>
            <h2>{name}</h2>
        </div>    */}
    </div>
        
    )
}

export default Painting;
import { dataTwo } from "./dataTwo";
import { useState } from "react";
import './App.css';

function Sliders({anySlider}) {

    const [haircut, setHaircut] = useState(0);
    /* const [laying, setLaying] = useState(0);
    const [nailcare, setNailcare] = useState(0);
    const [painting, setPainting] = useState(0);  */
    const {name, image} = dataTwo[haircut];  
    /* const {name, image} = dataThree[laying];
    const {id, name, image} = dataNine[nailcare];
    const {id, name, image} = dataFour[painting];  */ 

    /* const text = "СТРИЖКА всегда была и остаётся одной из самых востребованных услуг в салонах красоты. Здоровые, ухоженные и красиво уложенные волосы создают неповторимый образ красоты и обаяния. Причем это работает как для женщин, так и для мужчин. Стрижка – способ самовыражения и проявления своей индивидуальности, который доступен каждому. Это способ показать свой характер, амбиции, оказать влияние на окружающих и показать им свое скрытое «Я». Стрижка – это не просто парикмахерская услуга, это во многом – искусство, в котором важно уметь найти гармонию между внешним обликом человека, его эстетическими пожеланиями и тенденциями в области моды и стиля. Грамотный и квалифицированный парикмахер должен учесть тип и природный цвет волос, форму головы, шеи, лица. Ответственный подход к учету всех этих нюансов и высокая квалификация мастеров позволяют нам гарантировать нашим клиентам положительные эмоции от процесса стрижки и ее конечного результата. Вы можете заказать нашим парикмахерам стрижку, описав желаемый результат, можете заказать стрижку из каталога, можете принести с собой фотографию кинозвезды или любимой артистки, стрижку которой хотите скопировать – мы идем навстречу любым пожеланиям клиентов. Для нас важно, чтобы наши посетители чувствовали себя обновленными и вдохновленными. Приходите к нам, мы Вас ждем!" */

    const next = () => {
        setHaircut((haircut => {
            haircut ++;
              if(haircut > dataTwo.length -1) {
                haircut = 0;
            }
            return haircut;
        }))
    } 

    const previous  = () => { 
        setHaircut((haircut => {
            haircut --;
            if(haircut < 0) {
                return dataTwo.length - 1;
            }
            return haircut;
        }))
    }   
    
     /* const next = () => {
      setLaying((laying => {
          laying ++;
          if(laying > dataThree.length -1) {
              laying = 0;
          }
          return laying;
      }))
  } */

  /* const previous = () => {
      setLaying((laying => {
          laying --;
          if(laying < 0) {
              return dataThree.length - 1;
          }
          return laying;
      }))
  }

  const next2 = () => {
    setNailcare((nailcare => {
        nailcare ++;
        if(nailcare > dataNine.length -1) {
            nailcare = 0;
        }
        return nailcare;
    }))
}

const previous2 = () => {
    setNailcare((nailcare => {
        nailcare --;
        if(nailcare < 0) {
            return dataNine.length - 1;
        }
        return nailcare;
    }))
}

const next3 = () => {
  setPainting((painting => {
      painting ++;
      if(painting > dataFour.length -1) {
          painting = 0;
      }
      return painting;
  }))
}
 
const previous3 = () => {
  setPainting((painting => {
      painting --;
      if(painting < 0) {
          return dataFour.length - 1;
      }
      return painting;
  }))
}  */ 

return(

       
        <div>

       
    <div className="container">
       

        <div className="back">
            <button className="change" onClick={previous}>
              <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
            </button>

             <img className="image" src={image} width="320px" alt="cinema"/> 

            <button className="change" onClick={next}>
              <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>
            </button>

            <h2>{name}</h2>
        </div>  
    </div>
    </div>
    )
}

export default Sliders;
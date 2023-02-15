import './App.css';
import Beauty from './Beauty';
import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';

function Home() {
    const [beauty, setBeauty] = useState(data);
    
    const chosenBeauty = (searchTerm) => {
    const newBeauty = data.filter(element => element.searchTerm === searchTerm);
    setBeauty(newBeauty);
  }
  return (
    <div>
      <h1 className='back'>Услуги нашего салона!</h1>
      <Buttons anyButtons = {chosenBeauty}/>
      <Beauty anyBeauty = {beauty}/>
    </div>
    
  );
}

export default Home;
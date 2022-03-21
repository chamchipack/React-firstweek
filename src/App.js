import logo from './logo.svg';
import './App.css';
import Week from './week'
import {Route} from 'react-router-dom';
import Detail from './detail'
import { useState, useEffect } from 'react';

function App() {
  let [days, daysChange] = useState(['일','월','화','수','목','금','토']);
  let [whatDay, whatDayChange] = useState();
  
  let idxNum = 0;
    for(let i = 0; i < days.length; i++){
      if(days[i] == whatDay){
        idxNum = i
      }
    }
    let par = idxNum;
  return (
    <div className="App">
      <Route path='/' exact>
        <Week days={days} daysChange={daysChange} wdc={whatDayChange} par={par}></Week>
      </Route>
      <Route path='/week/:idxNum' exact>
        <Detail whatDay={whatDay}></Detail>
      </Route>
    </div>
  );
}

export default App;

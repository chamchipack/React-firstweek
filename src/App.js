import logo from './logo.svg';
import './App.css';
import Week from './week'
import {Route} from 'react-router-dom';
import Detail from './detail'
import Example from './example'
import { useState, useEffect } from 'react';

function App() {
  let [getDays, setDays] = useState(['일','월','화','수','목','금','토']);
  let [getWhatDay, setWhatDay] = useState();

  return (
    <div className="App">
      <Route path='/' exact>
        <Week getDays={getDays} setDays={setDays} setWhatDay={setWhatDay}></Week>
      </Route>
      <Route path='/week/:idxNum' exact>
        <Detail getWhatDay={getWhatDay}></Detail>
      </Route>
      <Example></Example>
    </div>
  );
}

export default App;

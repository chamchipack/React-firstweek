import logo from './logo.svg';
import './App.css';
import Week from './week'
import {Route} from 'react-router-dom';
import Detail from './detail'
import { useState } from 'react';

function App() {
  let [days, daysChange] = useState(['일','월','화','수','목','금','토']);
  

  return (
    <div className="App">
      <Route path='/' exact>
        <Week days={days} daysChange={daysChange} ></Week>
      </Route>
      <Route path='/week' exact>
        <Detail></Detail>
      </Route>
    </div>
  );
}

export default App;

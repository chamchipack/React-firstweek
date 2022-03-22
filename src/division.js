import React from 'react';
import {Route, Link, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';

function Division(props){
  const history = useHistory();
    let days = props.days;
    let ran_rate = props.ran_rate;
    let setWhatDay = props.setWhatDay
    let dayNum = props.dayNum;
    return(
      <>
        <div className='week'>
          <p>{days}</p>
            {
              Array.from({length:5},(el,idx)=>{
                return ( 
                <div className='point-circle' style={{backgroundColor : ran_rate <= idx ? "#eee" : "#ffeb3b"}}></div>
               )
              })
            }
          <div className='triangle-btn' onClick={()=>{setWhatDay(days); history.push(`/week/${dayNum}`) }}></div>
        </div>
      </>
    )
}
export default Division
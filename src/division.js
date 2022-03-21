import React from 'react';
import {Route, Link, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';

function Division(props){
  const history = useHistory();
    let i = props.i
    let days = props.days;
    let rate = props.rate;
    let wdc = props.wdc
    const array = [2,4,3,5,1]
    return(
      <>
        <div key={i} className='week'>
          <p>{days}</p>
            {
              array.map((el,idx)=>{
                return ( 
                <div className='point-circle' style={{backgroundColor : rate <= idx ? "#eee" : "#ffeb3b"}}></div>
               )
              })
            }
          <div className='trian' onClick={()=>{history.push(`/week/${props.par}`); wdc(days)}}></div>
        </div>
      </>
    )
}
export default Division
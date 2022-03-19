import React from 'react';
import {Route, Link} from 'react-router-dom';

function division(props){
    let i = props.i
    let days = props.days;
    let rate = props.rate;
    let wdc = props.wdc
    const array = [2,4,3,5,1]
    return(
        <div key={i} className='week'>
                <p>{days}</p>
                {
                  array.map((el,idx)=>{
                   return ( 
                   <div className='point-circle' style={{backgroundColor : rate <= idx ? "#eee" : "#ffeb3b"}}></div>
                   )
                  })
                }
                <Link to='/week'><div className='trian' onClick={()=>wdc(days)}></div></Link>
            </div>
    )
}
export default division
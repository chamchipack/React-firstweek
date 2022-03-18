import {React} from 'react';
import './week.css';
import {Route, Link} from 'react-router-dom';

function Week(props){
  let days = props.days
  const week = days.map((e,idx)=>{
    let today = new Date().getDay();
    let check = today + idx > 6
    ? today + idx -7
    : today + idx
    return days[check]
  })

  const week_rate = week.map((e,idx)=>{
    return {
      day : e,
      num : parseInt(Math.random()*5+1)
    }
  })
  const array = [2,4,3,5,1]




    return(
        <>
        <div className='main-box'>
        <div className='main-inner-box'>
          <div className='title-box'><h3>나의 일주일은</h3></div>
          {
            week.map((e,i)=>{
              let what = parseInt(Math.random()*5+1)
              return(
              <div key={i} className='week'>
                <p>{e}</p>
                {
                  array.map((el,idx)=>{
                    
                    console.log({what, idx})
                   return ( 
                   <div className='point-circle' style={{backgroundColor : what <= idx ? "#eee" : "#ffeb3b"}}></div>
                   )
                  })
                  
                }
                <Link to='/week'><div className='trian'></div></Link>
            </div>)
            })
          }


        </div>
      </div>
        </>
    )
}
export default Week
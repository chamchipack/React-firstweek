import {React} from 'react';
import './week.css';
import {Route, Link} from 'react-router-dom';

function Week(props){
  // app.js에서 요일 배열 받아옴
  let days = props.days
  // 배열을 반복시킨것에 오늘의 요일을 Date함수로 받아줌
  const week = days.map((e,idx)=>{
    let today = new Date().getDay();
    // 7진법의 양태로 오늘의 요일이 가장 먼저오게 배열 리턴을 바꿔줌
    let check = today + idx > 6
    ? today + idx -7
    : today + idx
    return days[check]
  })
  // 오늘의 요일이 먼저오는 배열을 반복시켜 오브젝트로 난수와 함께 담아준다.
  const week_rate = week.map((e,idx)=>{
    return {
      day : e,
      num : parseInt(Math.random()*5+1)
    }
  })
  const array = [2,4,3,5,1]
    // 1. week 부분 컴포넌트화 시키기 2. Link 인덱스값 넘겨서 구분하기 // 3. useEffect
    return(
        <>
        <div className='main-box'>
        <div className='main-inner-box'>
          <div className='title-box'><h3>나의 일주일은</h3></div>
          {
            week.map((days,i)=>{
              let rate = week_rate[i].num
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
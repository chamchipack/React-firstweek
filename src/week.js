import {React, useState} from 'react';
import './week.css';
import {Route, Link} from 'react-router-dom';
import Days from './division';
import {useEffect, useReducer} from 'react'

function Week(props){
  let getDays = props.getDays
  // 배열을 반복시킨것에 오늘의 요일을 Date함수로 받아줌
  const weekAllDays = getDays.map((e,idx)=>{
    let today = new Date().getDay();
    // 7진법의 양태로 오늘의 요일이 가장 먼저오게 배열 리턴을 바꿔줌
    let check = today + idx > 6
    ? today + idx -7
    : today + idx
    return getDays[check]
  })
  // 오늘의 요일이 먼저오는 배열을 반복시켜 오브젝트로 난수와 함께 담아준다.
  const week_random_point = weekAllDays.map((e,idx)=>{
    let today = new Date().getDay();
    let check = today + idx > 6
        ? today + idx -7
        : today + idx
    return {
      day : e,
      dayNum : check,
      ran_point : parseInt(Math.random()*5+1)
    }
  })
  console.log(week_random_point)
    // 1. week 부분 컴포넌트화 시키기 2. Link 인덱스값 넘겨서 구분하기 // 3. useEffect
    return(
        <>
        <div className='main-box'>
          <div className='main-inner-box'>
            <div className='title-box'><h3>나의 일주일은</h3></div>
            {
              weekAllDays.map((days,i)=>{
                let ran_rate = week_random_point[i].ran_point
                let dayNum = week_random_point[i].dayNum
                return(
                  <Days days={days} dayNum={dayNum} ran_rate={ran_rate} setWhatDay={props.setWhatDay}/>
                )
              })
            }
         </div>
       </div>
      </>
    )
}
export default Week


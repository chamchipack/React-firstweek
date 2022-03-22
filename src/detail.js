import React from "react";
import './detail.css'
import { useLocation, useHistory } from 'react-router-dom'
import { useState } from 'react';

function Detail(props){
    let [style, styleChange] = useState();
    let [rate, setRate] = useState(0);
    let history = useHistory();
    const press = (event)=>{
        console.log(event.key)
        let pushNum = event.key
        return setRate(pushNum)
    }
    window.addEventListener('keydown', press)
    
    return (
        <>
        <div className="detail-box">
            <h3 style={{marginTop: 50}}>{`${props.getWhatDay}요일의 평점`}</h3>
            <div className="detail-inner">
                <p>{props.getWhatDay}</p>
                {
                    Array.from({length:5},(element,idx)=>{
                        return(
                            <div key={idx} onClick={()=>{styleChange('yellow'); press();setRate(idx+1)} } className="detail-circle" style={{backgroundColor: rate > idx ? style : '#eee'}}></div>
                        )
                    })
                }
            </div>
            <div>
                <button className="detail-btn" onClick={()=>history.goBack()}>제출하기</button>
            </div>
        </div>
        </>
    )    
}

export default Detail;
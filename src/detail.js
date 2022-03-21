import React from "react";
import './detail.css'
import { useLocation, useHistory } from 'react-router-dom'
import { useState } from 'react';

function Detail(props){
    const array = [1,2,3,4,5]
    let [style, styleChange] = useState();
    let [rate, setRate] = useState(0);
    let history = useHistory();
    const press = ()=>{
        console.log('clicked : ', rate)
    }
    window.addEventListener('keydown', press)
    return (
        <>
        <div className="detail-box">
            <h3 style={{marginTop: 50}}>{`${props.whatDay}요일의 평점`}</h3>
            <div className="detail-inner">
                <p>{props.whatDay}</p>
                {
                    array.map((e,idx)=>{
                        return(
                            <div key={idx} onClick={()=>{styleChange('yellow'); press(); setRate(idx+1)}} className="detail-circle" style={{backgroundColor: rate > idx ? style : '#eee'}}></div>
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
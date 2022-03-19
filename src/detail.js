import React from "react";
import './detail.css'
import { useLocation } from 'react-router-dom'

function detail(props){
    console.log(props.whatDay)
    return (
        <>
        <div className="detail-box">
            <h3 style={{marginTop: 50}}>나의 하루는?</h3>
            <div className="detail-inner">
                <p>{props.whatDay}</p>
                <div className="detail-circle"></div>
                <div className="detail-circle"></div>
                <div className="detail-circle"></div>
                <div className="detail-circle"></div>
                <div className="detail-circle"></div>
            </div>
            <div>
                <button className="detail-btn">제출하기</button>
            </div>
        </div>
        </>
    )    
}

export default detail;
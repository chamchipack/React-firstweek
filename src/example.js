import {react, useState} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {createWidget} from './redux/modules/widget'

function Example(){
    const [getInput, setInput] = useState();
    const onChange = (event) =>{
        setInput(event.target.value);
    }
    console.log(getInput)
    // state : store에서 가지고 있는 모든 값
    const data = useSelector((state)=> state);
    const dispatch = useDispatch();

    const addList = () => {
        //액션생성함수를 집어넣는다
        dispatch(createWidget(getInput));
    }
    return (
        <div>
            <h1>{data.widget.list}</h1>
            <input onChange={onChange} />
            <button onClick={addList}>버튼</button>
        </div>
    )
}
export default Example
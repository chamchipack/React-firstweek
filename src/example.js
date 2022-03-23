import {react, useState} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {createWidget, loadWidgets, updateWidget} from './redux/modules/widget'

function Example(){
    const [getInput, setInput] = useState();
    const onChange = (event) =>{
        setInput(event.target.value);
    }

    // state : store에서 가지고 있는 모든 값
    const data = useSelector((state)=> state);
    const dispatch = useDispatch();

    const addList = () => {
        //액션생성함수를 집어넣는다
        dispatch(createWidget(getInput));
    }

    const update = () =>{
        let par;
        if(data.widget.value == true){
            par = false
        } else {
            par = true
        }
        dispatch(updateWidget(par))
    }
    return (
        <div>
            <h1>{data.widget.list}</h1>
            <h3></h3>
            <button onClick={()=>update()}>Change</button>
            {
                data.widget.value == true
                ? <h2>TRUE</h2>
                : <h2>FALSE</h2>
            }
        </div>
    )
}
export default Example